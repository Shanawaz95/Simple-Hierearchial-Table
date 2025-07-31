import React, { useState, useCallback } from "react";
import { INITIAL_TABLE_DATA, TABLE_COLUMNS } from "./components/constants";
import HierarchicalTable from "./components/Table";
function App() {
  const [data, setData] = useState(INITIAL_TABLE_DATA);
  const [inputValue, setInputValue] = useState({});

  const handleValueChange = useCallback(
    (value, rowId) => {
      setInputValue({ ...inputValue, [rowId]: Number(value) });
    },
    [inputValue]
  );

  const calculateParentValue = (children) => {
    return children.reduce((sum, child) => sum + (child.value || 0), 0);
  };

  const handleAllocationValueClick = (rowId, isParent) => {
    if (!inputValue[rowId]) return;

    setData((prevData) => ({
      ...prevData,
      rows: prevData.rows.map((row) => {
        if (isParent && row.id === rowId) {
          return { ...row, value: inputValue[rowId] };
        } else if (row.children) {
          const updatedChildren = row.children.map((child) => ({
            ...child,
            value: child.id === rowId ? inputValue[rowId] : child.value,
          }));
          return {
            ...row,
            children: updatedChildren,
            value: calculateParentValue(updatedChildren),
          };
        }
        return row;
      }),
    }));
  };

  const handleButtonClick = (columnId, rowId, isParent) => {
    if (!inputValue[rowId]) {
      return;
    }
    switch (columnId) {
      case "allocationPercent":
        handleAllocationValueClick(rowId, isParent);
        break;
      case "allocationValue":
        console.log(rowId, isParent);

        break;
      default:
        break;
    }
  };

  return (
    <HierarchicalTable
      data={data}
      columns={TABLE_COLUMNS}
      value={inputValue}
      onValueChange={handleValueChange}
      onButtonClick={handleButtonClick}
    />
  );
}

export default App;

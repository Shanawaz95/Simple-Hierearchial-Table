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
  console.log(data);

  const handleAllocationValueClick = (rowId, isParent) => {
    setData((prevData) => ({
      ...prevData,
      rows: prevData.rows.map((row) => ({
        ...row,
        value:
          isParent && inputValue?.[row.id] ? inputValue?.[row.id] : row.value,
        children: row.children.map((child) => ({
          ...child,
          value: child.id === rowId ? inputValue[child.id] : child.value,
        })),
      })),
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

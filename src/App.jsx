import React, { useState, useEffect } from "react";
import { INITIAL_TABLE_DATA, TABLE_COLUMNS } from "./components/constants";
import HierarchicalTable from "./components/Table";
function App() {
  const [data, setData] = useState(INITIAL_TABLE_DATA);
  const [inputValue, setInputValue] = useState(0);

  const calculateParentValue = (children) => {
    return children.reduce((sum, child) => sum + (child.value || 0), 0);
  };

  // Update parent values whenever children change
  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      rows: prevData.rows.map((row) => ({
        ...row,
        value: row.children ? calculateParentValue(row.children) : row.value,
      })),
    }));
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle child value change
  // const handleChildValueChange = (parentId, childId, newValue) => {
  //   const numericValue = parseFloat(newValue) || 0;

  //   setData((prevData) => ({
  //     ...prevData,
  //     rows: prevData.rows.map((row) => {
  //       if (row.id === parentId) {
  //         const updatedChildren = row.children.map((child) =>
  //           child.id === childId ? { ...child, value: numericValue } : child
  //         );
  //         return {
  //           ...row,
  //           children: updatedChildren,
  //           value: calculateParentValue(updatedChildren),
  //         };
  //       }
  //       return row;
  //     }),
  //   }));
  // };

  const handleButtonClick = (columnId, rowId, parentId) => {
    console.log(
      `Button clicked - Column: ${columnId}, Row: ${rowId}, Parent: ${parentId}`
    );

    switch (columnId) {
      case "allocationPercent":
        // Handle allocation percentage button click
        alert(`Allocation % button clicked for ${rowId}`);
        break;
      case "allocationValue":
        // Handle allocation value button click
        alert(`Allocation Value button clicked for ${rowId}`);
        break;
      default:
        console.log("Unknown button clicked");
    }
  };

  return (
    <HierarchicalTable
      data={data}
      columns={TABLE_COLUMNS}
      onValueChange={handleInputChange}
      onButtonClick={handleButtonClick}
    />
  );
}

export default App;

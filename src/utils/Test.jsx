import React from "react";

const Test = () => {
  function generateGridElements(numRows, numCols, totalElements) {
    
}

// Example usage
const numRows = 3;
const numCols = 4;
const totalElements = 6;
const gridElements = generateGridElements(numRows, numCols, totalElements);

console.log(gridElements);

  return (
    <div>
      <div className="grid grid-rows-9 grid-cols-12 gap-4">
        {gridElements.map((item) => (
          <div className={`${item.rowStart} ${item.rowEnd} ${item.colStart} ${item.colEnd} bg-cyan-600`}>
            test
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;

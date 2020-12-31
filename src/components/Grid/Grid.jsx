import React, { useState, useEffect } from "react";
import Node from "../Node/Node";
import styles from "./Grid.module.css";

function Grid() {
  const rows = 24;
  const cols = 60;

  const [Grid, setGrid] = useState([]);

  useEffect(() => {
    initializeGrid();
  }, []);

  function initializeGrid() {
    const grid = new Array(cols);
    for (let i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
    }
    createSpot(grid);
    setGrid(grid);
  }

  function createSpot(grid) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[i][j] = new Spot(i, j);
      }
    }
  }

  function Spot(i, j) {
    this.x = i;
    this.y = j;
    this.g = 0;
    this.h = 0;
    this.f = 0;
  }

  return (
    <div >
      {Grid.map((row,rowIndex)=>{
          return (
             <div className={styles.grid} key={rowIndex}>
               {row.map((col,colIndex)=>{
                   return (
                       <Node key={colIndex}/>
                   )
               })}
             </div>
          );
      })}
    </div>
  );
}

export default Grid;

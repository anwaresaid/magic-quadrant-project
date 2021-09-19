import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";

function Board(props) {
  return (
    <div id='myCanvas' className='myCanv'>
      <div className='xline'></div>
      <div className='yline'></div>
      <div className='challenger'>
        <label>Challenger</label>
      </div>
      <div className='leaders'>
        <label>Leaders</label>
      </div>
      <div className='niche'>
        <label>Niche Players</label>
      </div>
      <div className='vision'>
        <label>Visionaries</label>
      </div>

      {props.dots.map((dot) => {
        return (
          <Card
            key={dot.id}
            id={dot.id}
            className={dot.className}
            x_axis={dot.x_axis}
            y_axis={dot.y_axis}
          >
            <p id={dot.id + "-label"} className='plabel'>
              {dot.name}
            </p>
          </Card>
        );
      })}
      <div className='y-label'>
        <label> {"ability to execute ->"}</label>
      </div>
      <div className='x-label'>
        <label> {"completeness of vision ->"}</label>
      </div>
    </div>
  );
}

export default Board;

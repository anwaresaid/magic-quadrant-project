import { set } from "mongoose";
import React, { useState, useEffect } from "react";

function Card(props) {
  const [dragStartLeft, setDragStartLeft] = useState();
  const [dragStartTop, setDragStartTop] = useState();
  const [dragX, setDragX] = useState();
  const [dragY, setDragY] = useState();
  const [x_axis, setX_axis] = useState(props.x_axis);
  const [y_axis, setY_axis] = useState(props.y_axis);
  const [mouseUsed, setMouseUsed] = useState(false);

  const [ref, setRef] = useState();
  const initialiseDrag = (event) => {
    const { target, clientX, clientY } = event;
    const { offsetTop, offsetLeft } = target;
    const { left, top } = ref.getBoundingClientRect();
    setDragStartLeft(left - offsetLeft);
    setDragStartTop(top - offsetTop);
    setDragX(clientX);
    setDragY(clientY);

    window.addEventListener("mousemove", startDragging, false);
    window.addEventListener("mouseup", stopDragging, false);
  };

  const startDragging = ({ screenX, screenY }) => {
    setX_axis(screenX);
    setY_axis(screenY);
    setMouseUsed(true);
  };

  const stopDragging = () => {
    window.removeEventListener("mousemove", startDragging, false);
    window.removeEventListener("mouseup", stopDragging, false);
  };
  return (
    <div
      id={props.id}
      className={props.className}
      style={
        !mouseUsed
          ? {
              top: 390 - parseFloat(y_axis) * 4 + 3,
              left: parseFloat(x_axis) * 4 - 8,
            }
          : {
              top: -250 + y_axis,
              left: x_axis,
            }
      }
      onMouseDown={initialiseDrag}
      ref={setRef}
    >
      {props.children}
    </div>
  );
}

export default Card;

import React, { useState } from "react";

function ToDoItem(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick(e) {
    setClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecorationLine: clicked ? "line-through" : null }}
    >
      {props.value}
    </li>
  );
}

export default ToDoItem;

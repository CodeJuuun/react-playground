import { useState } from "react";

function MyButton(props) {
  return (
    <button onClick={props.onClick}>
      clicked {props.count} times
    </button>
  );
}


export default MyButton;


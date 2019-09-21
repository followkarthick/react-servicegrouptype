import React from "react";

export default function Radio(props) {
  return (
    <div>
      <label>
        <input type="radio" defaultChecked={props.defaultChecked} name={props.name} value={props.value} onChange={props.onChange} />
        {props.value}
      </label>
    </div>
  );
}


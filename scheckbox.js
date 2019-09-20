import React from "react";

export default function SCheckBox(props) {
  return (
    <div>
      <label>
        <input type={props.type} value={props.value} className={props.className} onChange={props.onChange} />
        {props.value}
      </label>
    </div>
  );
}
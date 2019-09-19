import React from 'react';

export default function CheckBox({name, value, tick, onCheck}) {
                  return (
                  <div >
                    <label style={{color: value === "FXE" ? "#ff6200" : "black"}}>
                        <input
                            name={name}
                            type="checkbox"
                            value={value}
                            checked={tick || false}
                            onChange={onCheck}
                        />
                        {value}
                    </label>
                    </div>
                );
            }

import React, { useState, useEffect } from 'react';
import  ServiceGroupList from 'ServiceGroupList';
import './style.css';


const Opco = (props) =>{
console.log(props.data);
  return(
    
<div className="row" >
        {props.data.map(servG => {

          return (
            <div className="column">
            <div className="card">

            <header className="card-header">
              <h4>
                <label>
                  <input type="checkbox"  />
                  {servG.service_group_name }
                </label>
              </h4>
            </header>

              {servG.services.map(service => {
                return (
                      <div>        
                      <ServiceGroupList serviceObj={service} />
                         </div>            )
              })}
              </div>
            </div>
          )
        })}
      </div>

  )
}

export default Opco;
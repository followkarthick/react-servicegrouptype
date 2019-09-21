import React from 'react';
import CheckBox from './CheckBox';

export default function CheckBoxList({ services, isCheckedAll, onCheck, opcoName }) {
 
  const checkBoxOptions = (
    <div>
      {services.map((service, index) => {
        
        return (
          <CheckBox key={index} name={service.service_code} value={service.service_name} tick={service.checked} onCheck={(e) => onCheck(service.service_name, e.target.checked)} />
        );
      })}
    </div>
  );

  return (
    <div className="column">
      <div className="card">

        <header className="card-header">
          <CheckBox name="select-all" value={opcoName} tick={isCheckedAll} onCheck={(e) => onCheck('all', e.target.checked)} />
        </header>
        {checkBoxOptions}
      </div>
    </div>
  );
}
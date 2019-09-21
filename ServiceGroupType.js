import React, { useState, useEffect } from 'react';
import OpcoList from './OpcoList';
import ServiceGroupList from './ServiceGroupList';

import './style.css';

const TEST_API_URL = "https://cpmtest.app.wtcdev2.paas.fedex.com/cpm/R3/search-options-service/serviceGroup";
const API_URL = "https://www.mocky.io/v2/5d8603783200000b6207b32b";
const ServiceGroupType = () => {
  const [details, setDetails] = useState([]);
  async function getDataFromAPI() {
    const result = await fetch(API_URL);
    const data = await result.json();
    setDetails(details = data);

  }

  useEffect(() => {
    getDataFromAPI();
    
  },[]);


  return (
    <div >
      {details && details.service_groups && details.service_groups.map(servG => {
        return <ServiceGroupList data={servG.services} opcoName={servG.service_group_name} />

      })}
    </div>


  )


}


export default ServiceGroupType;

import React, { useState, useEffect } from 'react';
import OpcoList from './OpcoList';
import ServiceGroupList from './ServiceGroupList';

import './style.css';

const API_URL = "https://cpmtest.app.wtcdev2.paas.fedex.com/cpm/R3/search-options-service/serviceGroup";
const ServiceGroupType = () => {
  const [details, setDetails] = useState([]);
  async function getDataFromAPI() {
    const result = await fetch(API_URL);
    const data = await result.json();
    setDetails(details = data.service_groups);

  }

  useEffect(() => {
    getDataFromAPI();
  });


  return (
    <div >
      <ServiceGroupList data={details} />
     
    </div>


  )


}


export default ServiceGroupType;

import React, { Component } from 'react';
import { render } from 'react-dom';
import ServiceGroupList from './ServiceGroupList';

import ServiceGroupType from './ServiceGroupType';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  

  render() {
    return (
      <div>
        <ServiceGroupList />
        <ServiceGroupType/>


        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

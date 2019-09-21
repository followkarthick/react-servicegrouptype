import React, { Component } from 'react';
import { render } from 'react-dom';
import ServiceGroupType from './ServiceGroupType';
import './style.css';
import SearchOptions from "./searchOptions";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducer/reducer"

const store = createStore(reducer);

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
       <h3 className="headerP"> Customer Pricing Map</h3>   
        <SearchOptions/>

        
  
        
      </div>
    );
  }
}

render(<Provider store={store}>
  <App  />
  </Provider>, document.getElementById('root'));


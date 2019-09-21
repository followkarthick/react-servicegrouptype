import React from "react";
import { connect } from "react-redux";
import ServiceGroupType from './ServiceGroupType';
import Checkbox from "./scheckbox";
import InputBox from "./inputBox";
import Button from "./button";
import Radio from "./radio";
import styled from 'styled-components';
import ViewData from "./viewData";

class SearchOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 'LevelId',
      radioLoadedChange: 'Loaded',
      radioComparisonValue: 'Across',
      levelIdEanValue: '',
      cashcheckBoxValue: '',
      deletecheckBoxValue: '',
      searchValue: '',
output:{
levelIDorEAN:'',
searchValue:'',
loadedopt:'',
cashopt:''
}

    }
  }

  searchClick = event => {
    
let out = {
  
levelIDorEAN:this.state.radioValue,
searchValue:this.state.levelIdEanValue,
loadedOpt:this.state.radioLoadedValue,
compareOpt:this.state.radioComparisonValue,
cashOpt:[this.state.cashcheckBoxValue,this.state.deletecheckBoxValue]
}


      this.props.searchUpdated(out);
    
    
  }

  levelIdChange = event => {
    const value = event.target.value;
    this.setState({ levelIdEanValue: value });
  }

  cashCheckBoxChange = event => {
    if (event.target.checked) {
      const value = event.target.value;
      this.setState({ cashcheckBoxValue: value });
    } else {
      this.setState({ cashcheckBoxValue: '' });
    }
  }
  deleteCheckBoxChange = event => {
    if (event.target.checked) {
      const value = event.target.value;
      this.setState({ deletecheckBoxValue: value });
    } else {
      this.setState({ deletecheckBoxValue: '' });
    }
  }
  radioChange = (event) => {
    const value = event.target.value;
    this.setState({ radioValue: value });
  }

  radioLoadedChange = (event) => {
    const value = event.target.value;
    this.setState({ radioLoadedValue: value });
  }

  radioComparisonChange = (event) => {
    const value = event.target.value;
    this.setState({ radioComparisonValue: value });
  }

  render() {
    return (
      <div>
        <TitleHeader>Search Options </TitleHeader>
        <SearchContainer>

          <CardBox>
            <CardBoxHeader> LevelID/EAN</CardBoxHeader>
            <InputBox type="text" onChange={this.levelIdChange} />
            <Radio type="radio" name="selection" value="Level Id" defaultChecked="defaultChecked" onChange={this.radioChange} />
            <Radio type="radio" name="selection" value="EAN" onChange={this.radioChange} />
          </CardBox>


          <CardBox>
            <CardBoxHeader> Pricing Loaded Options</CardBoxHeader>

            <Radio name="loaded" value="Pricing Loaded only" defaultChecked="defaultChecked" onChange={this.radioLoadedChange} />      <Radio name="loaded" value="Pricing Loaded with inheritance" onChange={this.radioLoadedChange} />

          </CardBox>
          <CardBox>
            <CardBoxHeader> Hierarchy Comparison Direction </CardBoxHeader>
            <Radio name="comparison" value="Compare Across Hierarchy" defaultChecked="defaultChecked" onChange={this.radioComparisonChange} />
            <Radio name="comparison" value="Compare Down Hierarchy" onChange={this.radioComparisonChange} />
          </CardBox>

          <CardBox>
            <CardBoxHeader> Pricing Options</CardBoxHeader>
            <Checkbox type="checkbox" value="Cash" className="margin" onChange={this.cashCheckBoxChange} />
            <Checkbox type="checkbox" value="Delete" className="margin" onChange={this.deleteCheckBoxChange} />
          </CardBox>


        </SearchContainer>
        <SubHeader>Service Group Types </SubHeader>
        <ServiceGroupType />
        <ViewData />
        <ButtonMargin>
          <Button type="submit" onClick={this.searchClick} />
        </ButtonMargin>
        <SearchResults>
          
        </SearchResults>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchUpdated: (details) => dispatch({ type: 'LOGINDETAILS', searchvalue: details }),
  }

}
function mapStateToProps(state) {
  console.log(state);
  return {
    searchValueStore: state.data.details,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptions);


const ButtonMargin = styled.div`
  width :10px;
  margin: 0 auto;
`;

const SearchResults = styled.div`
  text-align: center;
  color: red;
`;

const SearchContainer = styled.div`
  display: flex;
`;


const CardBox = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    text-align: left;
    background-color: white;
    margin: 1em;   
    border-radius: 5px;
   font-family: sans-serif;  
    height:100px;
    width: 300px;
   
`;


const CardBoxHeader = styled.div`

margin-bottom: 0;
    padding: 6px;
    border-bottom: 1px solid rgba(0,0,0,.125);    
    font-weight: bold;
    text-align: left;
    background-color: #4D148C;
    color: white;
    font-family: sans-serif; 
    font-size: medium;   
    border-radius: 3px;
`;

const TitleHeader = styled.div`
 text-align: left;
    background-color: lightgrey;
    height: 30px;
   padding: 10px;
    color: black;
    font-family: sans-serif;
    font-size: 11pt;
    font-weight: bold;
    border-radius: 3px;
`;

const SubHeader = styled.div`
 text-align: left;    
   padding: 10px;
    color: black;
    font-family: sans-serif;
    font-size: 11pt;
    font-weight: bold;
    border-radius: 3px;
`;


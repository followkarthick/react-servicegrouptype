import React from "react";
import { connect } from "react-redux"
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
      radioComparisonValue:'Across',
      levelIdEanValue: '',
      cashcheckBoxValue: '',
      deletecheckBoxValue: '',
      searchValue: '',
    }
  }

  searchClick = event => {
    event.preventDefault();
    if (this.state.radioValue == 'LevelId') {
      const value = "Search value is" + ' ' + this.state.radioValue + '-' + this.state.levelIdEanValue + '-' + this.state.cashcheckBoxValue + '-' + this.state.deletecheckBoxValue;
      this.props.searchUpdated(value);
    } else if (this.state.radioValue == 'EAN') {
      const value = "Search value is" + ' ' + this.state.radioValue + '-' + this.state.levelIdEanValue + '-' + this.state.cashcheckBoxValue + '-' + this.state.deletecheckBoxValue;
      this.props.searchUpdated(value);
    }
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
        <SearchContainer>
          
          <CardBox>
            <CardBoxHeader> LevelID/EAN</CardBoxHeader>            
                <Radio type="radio" name="selection" value="Level Id" defaultChecked="defaultChecked" onChange={this.radioChange} />
                <InputBox type="text" onChange={this.levelIdChange} />
                <Radio type="radio" name="selection" value="EAN" onChange={this.radioChange} />                          
            </CardBox> 
                   
            
              <CardBox>
              <CardBoxHeader> Pricing Loaded Options</CardBoxHeader>
                <Radio  name="loaded" value="Loaded only" defaultChecked="defaultChecked" onChange={this.radioLoadedChange} />      <Radio  name="loaded" value="Loaded with inheritance" onChange={this.radioLoadedChange} />              
            </CardBox>
            <CardBox>
              <CardBoxHeader> Hierarchy Comparison Direction </CardBoxHeader>
                <Radio  name="comparison" value="Across" defaultChecked="defaultChecked" onChange={this.radioComparisonChange} />
				<Radio  name="comparison" value="Down with inheritance" onChange={this.radioComparisonChange} />              
            </CardBox>

            <CardBox>
              <CardBoxHeader> Pricing Options</CardBoxHeader>
                <div><Checkbox type="checkbox" value="Cash" className="margin" onChange={this.cashCheckBoxChange} /></div>
            <div><Checkbox type="checkbox" value="Delete" className="margin" onChange={this.deleteCheckBoxChange} /></div>            
            </CardBox>
          
          
        </SearchContainer>
        <ButtonMargin>
          <Button type="submit" onClick={this.searchClick} />
        </ButtonMargin>
        <SearchResults>
          <ViewData />
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


const CheckboxBorder = styled.div`
  border: 1px solid;
  margin: 0 auto;
  width: 150px;
   border-radius : 5px;
   font-family: sans-serif;
`;

const Margin = styled.div`
  margin: 10px;
  display:inline
`;

const LevelIdEanBorder = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

    background-color: #white;
    margin: 0 auto;
    display: flex;
    border-radius: 5px;
    font-family:  sans-serif;
    font-size:small;

`;
const LoadedBorder = styled.div`
  border: 1px solid;
  margin: 0 auto;
  display: flex;
  font-family: sans-serif;
  border-radius : 5px;

`;

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
    margin: 5px;    
    border-radius: 5px;
   font-family: sans-serif;
   font-size: smaller;
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
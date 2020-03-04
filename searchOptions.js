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
      searchValue: '',      

    }
  }

  searchClick = event => {

    let out = {
      searchValue: this.state.levelIdEanValue,
    }
    this.props.searchUpdated(out);
  }
  levelIdChange = event => {
    const value = event.target.value;
    this.setState({ levelIdEanValue: value });
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


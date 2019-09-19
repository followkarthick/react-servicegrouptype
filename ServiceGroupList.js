import React, { Component } from 'react';
import { render } from 'react-dom';
import CheckBox from './CheckBox';
import CheckBoxList from './CheckBoxList';


export default class ServiceGroupList extends React.Component {
                constructor(props) {
                    super(props);

                    this.state = {
                        isAllSelected: false,
                        opcoName : 'FXE',
                        checkList: [
                           {
      "service_id" : "1",
      "service_code" : "IC",
      "service_code_short_nm" : "IC",
      "service_name" : "Intra-Country",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f769547"
    }, {
      "service_id" : "2",
      "service_code" : "EX",
      "service_code_short_nm" : "EX",
      "service_name" : "Export",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f769547"
    }, {
      "service_id" : "3",
      "service_code" : "IM",
      "service_code_short_nm" : "IM",
      "service_name" : "Import",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f769547"
    }, {
      "service_id" : "4",
      "service_code" : "3P",
      "service_code_short_nm" : "3P",
      "service_name" : "Third Party",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f769547"
    }, {
      "service_id" : "5",
      "service_code" : "PR",
      "service_code_short_nm" : "PR",
      "service_name" : "Puerto Rico",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f769547"
    }, {
      "service_id" : "6",
      "service_code" : "DS",
      "service_code_short_nm" : "DS",
      "service_name" : "Distribution Services",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f769547"
    }, {
      "service_id" : "7",
      "service_code" : "SUR",
      "service_code_short_nm" : "SUR",
      "service_name" : "Surcharges",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f769547"
    }, {
      "service_id" : "8",
      "service_code" : "BF",
      "service_code_short_nm" : "BF",
      "service_name" : "Billing Flags",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f769547"
    } ]
  }, {
    "service_group_id" : "2",
    "service_group_name" : "FXG",
    "services" : [ {
      "service_id" : "1",
      "service_code" : "INSP",
      "service_code_short_nm" : "INSP",
      "service_name" : "Intra Single Piece",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f5273985"
    }, {
      "service_id" : "2",
      "service_code" : "INMWT",
      "service_code_short_nm" : "INMWT",
      "service_name" : "Intra MWT",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f5273985"
    }, {
      "service_id" : "3",
      "service_code" : "EXSP",
      "service_code_short_nm" : "EXSP",
      "service_name" : "Export Single Piece",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f5273985"
    }, {
      "service_id" : "4",
      "service_code" : "IMSP",
      "service_code_short_nm" : "IMSP",
      "service_name" : "Import Single Piece",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f5273985"
    }, {
      "service_id" : "5",
      "service_code" : "EXIMMWT",
      "service_code_short_nm" : "EXIMMWT",
      "service_name" : "Export / Import MWT",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f5273985"
    }, {
      "service_id" : "6",
      "service_code" : "SP",
      "service_code_short_nm" : "SP",
      "service_name" : "SmartPost",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f5273985"
    }, {
      "service_id" : "7",
      "service_code" : "SUR",
      "service_code_short_nm" : "SUR",
      "service_name" : "Surcharges",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f5273985"
    }, {
      "service_id" : "8",
      "service_code" : "BF",
      "service_code_short_nm" : "BF",
      "service_name" : "Billing Flags",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f5273985"
    } ]
  }, {
    "service_group_id" : "3",
    "service_group_name" : "FXF",
    "services" : [ {
      "service_id" : "1",
      "service_code" : "IC",
      "service_code_short_nm" : "IC",
      "service_name" : "Intra-Country",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f769547"
    }, {
      "service_id" : "2",
      "service_code" : "EX",
      "service_code_short_nm" : "EX",
      "service_name" : "Export",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f769547"
    }, {
      "service_id" : "3",
      "service_code" : "IM",
      "service_code_short_nm" : "IM",
      "service_name" : "Import",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f769547"
    }, {
      "service_id" : "4",
      "service_code" : "SUR",
      "service_code_short_nm" : "SUR",
      "service_name" : "Surcharges",
      "eff_timestamp" : "01-Jan-00",
      "exp_timestamp" : "31-Dec-25",
      "lastUpdate_ID" : "f769547"
    } 
                        ]
                    };
                }

                onCheckBoxChange(checkName, isChecked) {
                    let isAllChecked = (checkName === 'all' && isChecked);
                    let isAllUnChecked = (checkName === 'all' && !isChecked);
                    const checked = isChecked;

                    const checkList = this.state.checkList.map((service, index) => {
                        if(isAllChecked || service.service_name === checkName) {
                            return Object.assign({}, service, {
                                checked,
                            });
                        } else if (isAllUnChecked) {
                            return Object.assign({}, service, {
                                checked: false,
                            });
                        }

                        return service;
                    });

                    let isAllSelected = (checkList.findIndex((item) => item.checked === false) === -1) || isAllChecked;

                    this.setState({
                        checkList,
                        isAllSelected,
                    });

                }

                render() {
                    return (<CheckBoxList services={this.state.checkList} isCheckedAll={this.state.isAllSelected} onCheck={this.onCheckBoxChange.bind(this)} opcoName={this.state.opcoName} />);
                }
            }

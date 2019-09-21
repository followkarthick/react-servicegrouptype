import React, { Component } from 'react';
import { render } from 'react-dom';
import CheckBox from './CheckBox';
import CheckBoxList from './CheckBoxList';


export default class ServiceGroupList extends React.Component {
                constructor(props) {
                    super(props);

                    this.state = {
                        isAllSelected: false,
                        opcoName : this.props.opcoName,
                        checkList: this.props.data
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

                    let isAllSelected = (this.state.checkList.findIndex((item) => item.checked === false) === -1) || isAllChecked;

                    this.setState({
                        checkList,
                        isAllSelected,
                    });
 
                }

                render() {
                    return (
                      <div>
                      <CheckBoxList services={this.state.checkList} isCheckedAll={this.state.isAllSelected} onCheck={this.onCheckBoxChange.bind(this)} opcoName={this.state.opcoName} />
                    
                    </div>
                    );
                }
            }

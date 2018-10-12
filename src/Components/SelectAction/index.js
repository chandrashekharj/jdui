import React from 'react';
import {
Dropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
 } from 'reactstrap';
import './style.css';
import AddRole from '../AddRole/'

class SelectActionCompnent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dropdownOpen: false,
      selectOptions: ['Create Role', 'Create User', 'Create Entity','Create Step', 'Assign Role' ]
    }
  }

   toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render(){
    const {
      selectOptions = [],
      dropdownOpen = false
    } = this.state;
    
    return(
      <div className="grid-wrap">
        <h3>Select Action</h3>
          <div className="selectchoice">
            <h4>Please select action of your choice: </h4>
            <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Available Actions
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
                {

                }
              </DropdownMenu>
            </Dropdown>
                {selectOptions ? console.log(selectOptions): ''}
          </div>
          <AddRole /> 
        </div>
    );
  }
}

  export default SelectActionCompnent;
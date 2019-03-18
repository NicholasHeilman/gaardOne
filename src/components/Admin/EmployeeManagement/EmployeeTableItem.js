import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmployeeTableItem extends Component {

    permissionLevel = () => {
        if(this.props.employee.admin){
            return <td>Admin</td>
        }else if(this.props.employee.employee){
            return <td>Employee</td>
        }
    }

    handleRemoveAdmin = () => {
        const action = {
            type: 'REMOVE_ADMIN',
            payload: this.props.employee,
          }
        this.props.dispatch(action);
    }

    handleAddAdmin = () => {
        const action = {
            type: 'ADD_ADMIN',
            payload: this.props.employee,
          }
        this.props.dispatch(action);
    }

    handleRemoveEmployee = () => {
        const action = {
            type: 'REMOVE_EMPLOYEE',
            payload: this.props.employee,
          }
        this.props.dispatch(action);
    }

    render() {
        return (
            <tr>
                <td>{this.props.employee.name}</td>
                {this.permissionLevel()}
                <td><button onClick={this.handleRemoveAdmin}>Remove Admin Permissions</button></td>
                <td><button onClick={this.handleMakeAdmin}>Make Admin</button></td>
                <td><button onClick={this.handleRemovePermissions}>Remove all Employee Permissions
                    </button></td>
            </tr>
        );
    }
}

export default connect()(EmployeeTableItem);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeTableItem from './EmployeeTableItem.js';

class EmpoyeeManagement extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
        <div>
            <p>
            Empoyee Management Page
            </p>

            <table>
                <thead>
                    <tr><th>Name</th></tr>
                </thead>
                <tbody>
                    {this.props.employees.map((employee, i) => {
                            return (<EmployeeTableItem key={i} 
                                        employee={employee} history={this.props.history}/>);
                    })}
                </tbody>
            </table>
        </div>
        );
    }
}

const mapReduxStoreToProps = reduxStore => ({
    ...reduxStore,
    employees: reduxStore.employees,
});

  export default connect(mapReduxStoreToProps)(EmpoyeeManagement);
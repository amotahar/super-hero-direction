import React from 'react';
import Name from '../Name/Name';
import './Total.css'

// total 
const Total = (props) => {
    const {total} = props;
    let totalSalary = 0;
    for(const salary of total){
        totalSalary = totalSalary + salary.salary;
    }
    
    return (
        <div>
            <div className="added">
            <h2 className="user"><i className="fas fa-user user-icon"></i> Presidents Added: {props.total.length}</h2>
            <h2 className="total-cost">Total Cost: <i className="fas fa-dollar-sign dollar"></i> {totalSalary}</h2>
            </div>
            <div>
            {/* using map  */}
            {
                total.map(singlePresident => <Name
                     key={singlePresident.id}
                     singlePresident={singlePresident}>
                     </Name>)
            }
            </div>
        </div>
    );
};

export default Total;
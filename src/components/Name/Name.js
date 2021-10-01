import React from 'react';
import './Name.css'
// Name 
const Name = (props) => {
    const { name, img } = props.singlePresident;
    return (
        <div className="single-president">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4> {name}</h4>
            </div>
        </div>
    );
};

export default Name;
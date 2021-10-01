import React, { useEffect, useState } from 'react';
import President from '../President/President';
import Total from '../Total/Total';
import './Presidents.css'

// Presidents 
const Presidents = () => {
    const [presidents, setPresidents] = useState([]);
    const [total, setTotal] = useState([]);
    useEffect(() => {
        fetch('./output.json')
            .then(res => res.json())
            .then(data => setPresidents(data))
    }, [])
    // handleCart click handler 
    const handleCart = (president) => {
        const newCart = [...total, president];
        setTotal(newCart)
    }
    
    return (
        <div className="presidents-container">
            <div className="presidents">
                {
                    presidents.map(president => <President
                        key={president.id}
                        president={president}
                        handleCart = {handleCart}>
                    </President>)
                }
            </div>
            <div className="total">
                <Total total={total}></Total>
            </div>
        </div>
    );
};

export default Presidents;
import './President.css'

// president 
const President = (props) => {
    const {img, name, age, country, email, salary} = props.president;
    return (
        <div className="president">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Age: {age}</h4>
            <h4>Country: {country}</h4>
            <h4>Email: {email}</h4>
            <h3>Salary: ${salary}</h3>
            
            {/* handleCart click handler */}
            <button onClick={() => props.handleCart(props.president)}><i className="fas fa-shopping-cart"></i> Add to cart</button>
        </div>
        
    );
};

export default President;
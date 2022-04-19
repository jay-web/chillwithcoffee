import CoffeeButton from "./CoffeeButton";


const CoffeeDetails = (props) => {
    return (
        <div>
             <h1>Coffee Store : {props.id}</h1>
             <CoffeeButton href="/" buttonText="Back to Home" /> 
             <div>
                <h1>{props.name}</h1>
                <h3>{props.address}</h3>
             </div>   
        </div>
    )
}

export default CoffeeDetails;
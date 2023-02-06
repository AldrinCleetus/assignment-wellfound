const Navbar = (props) => {
    return ( 
        <div className="navbar">
            <div className="brand">Brand</div>
            <button className="cardsButton" onClick={props.buttonPressed}>Get Cards</button>
        </div>
        
     );
}
 
export default Navbar;
const Card = (props) => {
    return ( 
        <div className="card">
          <img src={props.image} alt="profile pic" />
          <div className="cardDetails">
            <h3>{props.name}</h3>
            <p>{props.email}</p>
          </div>
        </div>
     );
}
 
export default Card;
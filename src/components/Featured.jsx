import React, { useState } from "react";
import {Link} from "react-router-dom";





function Featured(props) {

  


    return(
        <div className="card">
            <div className="top">
            <Link className= "item" to="/productDisplay" state={{nickname: props.nickname, image: props.img, price: props.price}} >
            <img className= "card-image" alt="image" src={props.img}></img>
            </Link>
            </div>
            <div className="bottom">
                <h4>{props.name}</h4>
                <h7 className="nickname" > {props.nickname} </h7>
                <h6 className="price" >Price: {props.price}</h6>
                
               
            </div>
            
            
        </div>
    )
}

export default Featured;
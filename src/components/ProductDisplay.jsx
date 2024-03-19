import React from "react";
import {Link, useLocation} from "react-router-dom"
import { useContext, useState } from "react";
import CartContext from "./CartContext";
import arrowBack from "../images/arrow.png"
import { Dropdown } from "bootstrap";



function ProductDisplay() {

    const location = useLocation();
    const {nickname, image, price} = location.state || {};
    const {handleClick} = useContext(CartContext);
    
   
    //add item to cart in an array and show cart in modal 
   

  

    return (

        <div className="content">
            
            <div className="product-view">
            <Link className= "go-back-link" to="/"><img className="arrow" src={arrowBack} alt="Arrow"/>  <b> Back to shop</b></Link>
            <div className="product-square">

            <div className="product-image">
                    <img src={image}></img>
                </div>
                <div className="product-modal">
                    <h7>{nickname}</h7><br></br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.</p>
                    <select>
                        <option>
                        28mm
                        </option>
                        <option>
                        36mm
                        </option>
                        <option>
                        42mm
                        </option>
                    </select>
                    <h7>Price: {price}</h7>
                   <button onClick={() => handleClick(nickname, image, price)}>Add to Cart</button> 
                </div>
                
               
            </div>
            </div>
        </div>
    )

}


export default ProductDisplay;
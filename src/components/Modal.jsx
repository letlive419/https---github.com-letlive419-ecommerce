import React, {useContext, useState} from "react";
import CartContext from "./CartContext"





    function Modal ({open, close}) {
        
       const {dataToPass, setDataToPass} = useContext(CartContext);
       const [totalAmount, setTotalAmount] = useState(0.00)
       
       function handleClear() {
        setDataToPass([])
       }

       function handleRemove(index) {
        const newItems = [...dataToPass];
        newItems.splice(index,1);
        setDataToPass(newItems);
       }
       
    
        if (open === false) return null
        return (
        
        <div className={open ? "is-basket-open basket" : "basket"} onClick={close} >
            <div className="basket-list" onClick={(e) => e.stopPropagation()}>
                <div className="basket-header">
                <h3 className="basket-header-title"> My Basket </h3>
                <div className="basket-header-buttons">
                <button onClick={close} > close </button>
                <button onClick={handleClear} > Clear </button>
                </div>
                </div>

               
            <div className="basket-empty">
            {dataToPass.length === 0 ? (<h1>No items</h1>) : (
               dataToPass.map((item, index) => (
                <div className="cart-item" key={index}>
                <img className="item-image-cart" src={item.image} alt={item.nickname} />
                <div className="item-info">
                <p><b>{item.nickname}</b> </p>
                <p><b>Price: {item.price}</b></p>
                <p><b>Quantity: </b></p>
                </div> 
                <p className="color"> Color </p>
                <div className="remove-button-div">
                <button className= "remove-button" onClick={() => handleRemove(index)}>X</button>
                {() => setTotalAmount(item.price)}
                </div>
                </div>
             
               )))
            }
            </div>
            <div className="basket-checkout"> 
            <div className="basket-total">
                <p>Subtotal Amount:</p>
                <h2>{dataToPass.reduce((sum, item) => sum + item.price, 0) + totalAmount}</h2>

            </div>
            <button> CheckOut </button>

            </div>   
                
            </div>
        </div>
        )
    }
  

    export default Modal;

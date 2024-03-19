import React, {useState} from "react";
import CartContext from "../components//CartContext";

function CartProvider({ children}){
    const [dataToPass, setDataToPass] = useState([]);

    function handleClick(nickname, image, price) {
        const data = {nickname, image, price};
        setDataToPass(prevData => ([...prevData, data]))
    }

    return(
        <CartContext.Provider value={{dataToPass, setDataToPass, handleClick}}>
        {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
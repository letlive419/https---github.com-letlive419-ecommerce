import React from "react";
import Featured from "./Featured";
import items from "../items";

function Products() {

    function createCard(item) {
        return (
            <Featured
                name={item.name}
                img={item.imgURL}
                nickname={item.nickname}
            Featured/>
        );
        
    }


    return(

    
    <div className="products">
        <div>
        <h3>Products</h3>
        </div>
        <div className="cards-order">
            {items.map(createCard)}
        </div>
    </div>
    );
}

export default Products;
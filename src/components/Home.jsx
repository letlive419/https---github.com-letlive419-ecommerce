import React from "react";
import bannerGirl from "../images/banner-girl.png"
import Featured from "./Featured"
import items from "../items";
import {Link} from "react-router-dom"




function Home() {

    

    function createCard(item) {
        return (
            <Featured
                name={item.name}
                img={item.imgURL}
                nickname={item.nickname}
                price={item.price}
            Featured/>
        );
        
    }

    return(
        <main className="content">
           
            <div className="home">
                <div className="banner">
                    <div className="banner-desc">
                        <h1 className="text-thin">
                            <strong>See</strong>
                            &nbsp;everything with&nbsp;
                            <strong>Clarity</strong>
                        </h1>
                        <p>
                        Buying eyewear should leave you happy 
                        and good-looking, with money in your pocket. 
                        Glasses, sunglasses, and contacts—we've got your 
                        eyes covered.
                        </p>
                        <br></br>
                        <Link className="button" to="/products">
                            Shop Now &nbsp;
                        </Link>
                    </div>
                    <div className="banner-img">
                        <img alt="banner" src={bannerGirl}  ></img>
                    </div>
                    
                </div>
                <div className="featured-title">
                <h2 className="title">Featured Products</h2>
                <Link to="/productDisplay" className="see-all">See All</Link>
                </div>
                <div className="featured">
                
                 { items.map(createCard)}
                 </div>
                 <div className="featured-title">
                <h2 className="title">Recommended Products</h2>
                <Link to="/products" className="see-all">See All</Link>
                </div>
                <div className="featured">
                
                 { items.map(createCard)}
                 </div>
            
            </div>
        </main>
          )
}

export default Home;


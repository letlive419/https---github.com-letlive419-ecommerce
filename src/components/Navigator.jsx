import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { Link,useResolvedPath, useMatch} from "react-router-dom";
import {useState} from "react";
import Modal from '../components/Modal'





function Navigator() {

  const [open, setOpen] = useState(false);
  

  




 function CustomLink ({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end:true})

  return (
    <li className={isActive ? "navigation-menu-active": ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
 }


    return (
      
      <nav className="navigation">
        
        <div className="logo"><Link to="/"><img alt="logo" src= {logo}/> </Link></div>

        <ul className="navigation-menu-main">
        <li><CustomLink to="/">Home </CustomLink></li>
        <li><CustomLink to="/products">Shop </CustomLink></li>
        <li><CustomLink to="/products">Featured </CustomLink></li>
        <li><CustomLink to="/products">Recommended </CustomLink></li>
        </ul>

        <span className="search-div">
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} /> 
        <input className="search-box" type="text" placeholder="Search Product..."></input>
        </span>

        <ul className="navigation-menu">
        <li className="navigation-menu-item">
         <button className="button-link" onClick={() => setOpen(true)}><FontAwesomeIcon  icon={faBagShopping} /></button>
         <Modal open={open} close={() => setOpen(false) }/>
            
         
         
        </li>
        <li className="navigation-action">
          <Link to="/signUp" className="button button-small">Sign Up</Link>
          <Link to="/signIn" className="button button-small button-muted margin-left-s">Sign In</Link>
        </li>
        </ul>

        
        
      </nav>
     

   
    
    )
}

export default Navigator;


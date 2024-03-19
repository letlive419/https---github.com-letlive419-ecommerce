import React from "react";
import logo from "../images/logo.png";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-col-1">
                <strong>
                    <span>
                        Developed by <br></br> 
                        <a href="https://github.com/letlive419">letlive</a>
                        
                    </span>
                </strong>
            </div> 

            <div className="footer-col-2">
                <img alt="Footer Logo" className="footer-logo" src={logo}></img>
                <h5>
                            ©&nbsp;
                            2024
                        </h5>
            </div>

            <div className="footer-col-3">
                <strong>
                    <span>
                        Fork this project &nbsp;<br></br>
                        <a href="https://github.com/letlive419">Click Here</a>
                    </span>
                </strong>
            </div>
        </footer>

            )
}

export default Footer;
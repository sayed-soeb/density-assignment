import React from "react";
import logo from "../images/Frame.svg";
import mobile from "../images/mobile2.png";
import future from "../images/future.png";
import { Link as ScrollLink } from 'react-scroll';
import "../Styles/Navbar.css";


function Navbar(){
    return(
        <>
        <div className="nav-container">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-lists">
                <div className="navlist">
                <li>
                <ScrollLink
                to="graphs"
                smooth={true}
                duration={500}
                >
                Career
                </ScrollLink></li>
                <li>
                <ScrollLink
                to="rev"
                smooth={true}
                duration={500}
                >Blogs
                </ScrollLink></li>
                <li>
                <ScrollLink
                to="led"
                smooth={true}
                duration={500}
                >Leaderboard
                </ScrollLink></li>
                <li>
                <ScrollLink
                to="pay"
                smooth={true}
                duration={500}
                >
                Fees
                </ScrollLink>
                </li>
                </div>
                <div className="nav-button">TRADE NOW</div>
            </div>

        </div>
        <div className="nav-mobile">
            <div className="nav-heading">
            <div className="up">
                <img src={future} alt="future" className="fut-img" />
                <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
                <img src={mobile} alt="mobile" className="mobile-img"/>
            </div>
            </div>
            

        </div>
        </>
    )
}
export default Navbar;
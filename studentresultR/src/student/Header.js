import { useState } from "react";
import cloceMenu from "../images/close.svg";
import menu from "../images/menu.svg";
import logo1 from "../images/scorekeeperremovebgpreview23021-cr8c-200h.png"
const Header =()=>{
    const [menuClick, setMenuClick]=useState(false);
    return (
        <div className="headder_c">
            <div className="topheader">

            </div>
        <header className="headder_container">
            
            <div className="logodi">
                <img src={logo1} style={{width:"100px",height:"100px",marginTop:"-10px"}} />
            </div>
            <nav>
                <ol>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Subject</li>
                    <li>Exams</li>
                    <li>Results</li>
                </ol>
                 <img className="header_menuc" src={menu} alt="menu"
                 onClick={()=>{setMenuClick(pre=>!pre?true:pre)}} 
                 />
                <ul style={{
                    right:`${menuClick ? "-20px":"-250px"}`,
                }}>
                    <div className="header_mClose">
                        <img src={cloceMenu} alt="cloce" onClick={()=>{setMenuClick(pre=>pre?false:pre)}}/>
                    </div>
                    <div className="header_menuli">
                        <li>Home</li>
                        <li>AboutUs</li>
                        <li>Subject</li>
                        <li>Exams</li>
                        <li>Results</li>
                    </div>
                    
                </ul>
                
            </nav>
            
    
        </header>
        </div>
    )
}
    export default Header;
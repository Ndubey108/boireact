import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

const Bankofindianavbar=()=>{
 
return(
<header>
        <nav  className="nav">
            <ul className="nav-items">
                <li className="item"><Link  className="Link" to="/about" >About Us</Link></li>
                <li className="item"><Link className="Link"to="/boiweb" >BOI Web</Link></li>
                <li className="item"><Link  className="Link" to="/investcorner" >Investor Corner</Link></li>
                <li className="item"><Link  className="Link" to="/forexcardrate" >Forex Card Rate</Link></li>
                <li className="item"> <Link  className="Link"to="#"><i className="fa fa-phone"></i>1800 103 1906</Link></li> 
                 <li className="item">
                  <input type="text" value="English"></input><button id="dropdownbtn"><img src="./images/down-arrow.png" id="firstarrow" height="10px" width="20px"></img></button>
                 
        </li>

                <li className="item"><Link className="Link" to="#"><img src="./images/map-icon-white-17.jpg" height="30px" alt="this is image"></img></Link></li>
                <li className="item"><Link className="Link" to="#">A+ A-</Link></li>
           
          </ul> 
        </nav>
        </header>
  )
}
export default Bankofindianavbar;

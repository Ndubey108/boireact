import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Aboutus from './Components/Aboutus';
import Boiweb from './Components/Boiweb';
import Investor from './Components/Investor';
import Forex from './Components/Forex';
const Bankofindianavbar=()=>{
  const name="nidhi"
return(
<header>
        <nav  className="nav">
            <ul className="nav-items">
                <li className="item"><Link  className="Link" to="/" element={<Aboutus/>}>About Us</Link></li>
                <li className="item"><Link className="Link"to="/boiweb" element={<Boiweb/>}>BOI Web</Link></li>
                <li className="item"><Link  className="Link" to="/investcorner" element={<Investor/>}>Investor Corner</Link></li>
                <li className="item"><Link  className="Link" to="/forexcardrate" element={<Forex name={name}/>}>Forex Card Rate</Link></li>
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
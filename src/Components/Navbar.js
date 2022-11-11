import {Link} from "react-router-dom";
import  "./Navbar.css";
import{CiFaceSmile} from'react-icons/ci';  
import{BsSearch ,BsHeart, BsFillPersonCheckFill}from 'react-icons/bs' ;
import{SlBasket} from 'react-icons/sl';
import{SiAdidas}from 'react-icons/si';



function Navbar() {




    return (
        <>
         <div className="heder-top">
                  <p>Hei fra andre siden! <CiFaceSmile/></p>  </div> 
        <div className="heder-midth">
                    <span> Norsk  </span>
                    <span> English  </span>
                    <span>عربي </span>

                    </div> 
             <nav className="">
                  
                <div className="navbar-container"> 
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >
                            Main
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links">
                            Products
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/hotel" className="nav-links" >
                            Inspiration
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hotel" className="nav-links" >
                            ContactUs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >
                            LogIn
                            </Link>
                        </li>
                        
                    </ul>
                    <div className="navlog1">
                                    <li>
                                        <p>IDRIS <SiAdidas></SiAdidas></p> 
                                    </li>
                                   
                        </div>
                        <div className="navlogs">
                                    <li>
                                        <BsHeart/>
                                    </li>
                                    <li>
                                        <BsSearch/>
                                    </li>
                                    <li className="navlogo1">
                                        <SlBasket/>
                                    </li>
                                    <li className="navlogo1">
                                        <BsFillPersonCheckFill/>
                                    </li>
                        </div>

                    


                   

                 </div>
             </nav>
        </>
        
    
    )
}

export default Navbar

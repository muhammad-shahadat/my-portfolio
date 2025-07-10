import React, { useEffect, useRef, useState } from 'react';
import "./Header.css";
import  {FaBars } from "react-icons/fa";
import navLogo from "../../assets/images/nav-logo.png";




const Header = () => {


    const [isExpandMenu, setIsExpandMenu] = useState(false);
    const menuListRef = useRef(null);


    useEffect(() =>{
        if (menuListRef.current) {
            menuListRef.current.style.maxHeight = isExpandMenu ? "300px" : "0px";
        }
        
    }, [isExpandMenu]);
    
    const toggleMenu = () =>{
        setIsExpandMenu(!isExpandMenu);
        
    }

  return (
    <>
        <nav>
            <div className="navbar">
                <div className="navbar-logo">
                    <div className="logo">
                        <img src={navLogo} alt="" />
                    </div>
                </div>
                <div className="navbar-menu">
                    <ul className="menu-list" ref={menuListRef} >
                        <li>
                            <a href="#hero">
                                Home 
                            </a>
                        </li>
                        <li>
                            <a href="#about-me">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                Projects

                            </a>
                        </li>

                        <li>
                            <a href="#skills">
                                Skills

                            </a>
                        </li>

                        <li>
                            <a href="#resume">
                                Resume

                            </a>
                        </li>

                        <li>
                            <a href="#contacts">
                                Contacts
                            </a>
                        </li>
                        
                            
                    </ul>
                </div>
                <div className="hamburger-icon">
                    <button onClick={toggleMenu}>
                        <FaBars />
                    </button>
                </div>
            </div>
        </nav>  
    
    </>
  )
}

export default Header;
import React, { useState } from 'react';
import './navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
    const [click, setClick] = useState(false);
    function handleClick() {
        setClick(!click);
        console.log("click", click);
    }


    return (<>
        <div className='navbar-container'>
            <div className="navbar">
                <nav className="nav grid-container">
                    <div className="nav-logo">
                        <p>BLUESTAR</p>
                    </div>
                    <div className={click ? 'nav-links' : 'unactive-nav-links'}>

                   
                    
                        <AnchorLink href='#add-edit-user-container'>User Management</AnchorLink>

                        <AnchorLink href='#aboutme'>About Me</AnchorLink>
                        <AnchorLink href='#myskill'>My Skills</AnchorLink>
                        <AnchorLink href='#myhobbies'>My Hobbies</AnchorLink>


                       

                    </div>

                    <div className={click ? 'nav-contact' : 'unactive-nav-contact'}>
                    <AnchorLink href='#contact-form'>Contact Us</AnchorLink>


                    </div>



                  


                </nav>
            </div>
        </div>
    </>
    )
};
import React from 'react'
import {useState} from "react";
function Navbar() {

const [isOpen , setIsOpen] =  useState(false);

  return (  
    <>
      <nav>
        <div className="nav-data">
          <div className="image">
            <img src="public/image 65 (1).png" alt="" />
          </div>

          <div className="nav-toggle"  onClick={()=>setIsOpen(!isOpen)}>
            {!isOpen ? (
                <img className="nav-burger" src="\menu-line.png " alt="" />
            ): (
               <img className="nav-close" src="\close-line.png" alt="" />
            )}
           
           
           
          </div>

        </div>
        <ul className={isOpen ? "nav-menu show": "nav-menu"}>
          <li>Services</li>
          <li>Pricing</li>
          <li>Industries</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
    
        <div className="button">
          <button>Get a Consultation</button>
        </div>
      </nav>
 
    </>
  )
}

export default Navbar
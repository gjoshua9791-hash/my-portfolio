import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    return (
        <header className="navbar">
        <nav className="navbar_inner">

            <Link to ="/" className="navbar_brand">
                Home 
                </Link>

            <button className="navbar_toggle" type="button" onClick={() => setIsMobileOpen((prev) =>!prev)}
            aria-label="Toggle menu" aria-expanded={isMobileOpen}
            >
               ☰ </button>
            <div className={`navbar_links ${isMobileOpen ? "is-open" : ""} `}>   
            
            <Link to="/about" className="navbar_link" onClick={() => setIsMobileOpen(false)}>About</Link>
            <Link to="/resume" className="navbar_link" onClick={() => setIsMobileOpen(false)}>Resume</Link>
            <Link to="/portfolio" className="navbar_link" onClick={() => setIsMobileOpen(false)}>Portfolio</Link>
           

            <div className="dropdown" onBlur={(e) => {if (!e.currentTarget.contains(e.relatedTarget)) setIsDropdownOpen(false);}}>
            <button className="navbar_link dropdown_button" onClick={() => setIsDropdownOpen((prev) => !prev)}
            aria-haspopup="menu" aria-expanded={isDropdownOpen} type="button">
                More ▾
            </button>
            {isDropdownOpen && ( 
                <div className="dropdown_menu" role="menu">
                    <Link to="/blog" className="dropdown_item" role="menuitem" onClick={() => {
                    setIsDropdownOpen(false); 
                    setIsMobileOpen(false); }}>
                    Blog
                    </Link>
                    </div>
            )}
            </div>

            <Link to="/contact" className="navbar_link" onClick={() => setIsMobileOpen(false)}>Contact</Link>
           </div> 
        </nav>
        </header>
    );

}
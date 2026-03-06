import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ padding: "1 rem", borderBottom: "1px solid #ddd"}}>
            <Link to="/" style={{ marginRight: 12}}>Home</Link>
            <Link to="/about" style={{ marginRight: 12}}>About</Link>
            <Link to="/resume" style={{ marginRight: 12}}>Resume</Link>
            <Link to="/portfolio" style={{ marginRight: 12}}>Portfolio</Link>
            <Link to="/blog" style={{ marginRight: 12}}>Blog</Link>
            <Link to="/contact" style={{ marginRight: 12}}>Contact</Link>
        </nav>
    );

}
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer_inner">
                <p> &copy; {new Date().getFullYear()} Joshua Garcia</p>
                </div>
            </footer>
        
    );
}
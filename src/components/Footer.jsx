import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer style={{ padding: "1rem", borderTop: "1px solid #ddd", 
            marginTop: "2rem" }}>
                <p>&copy; {new Date().getFullYear()} Joshua Garcia</p>
            </footer>
        
    );
}
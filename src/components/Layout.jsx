import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="site">
            <Navbar />
            <main className="site_main">
                <div className="container">
                <Outlet />
                </div>
            </main>
            <Footer />
            </div>
    );
}
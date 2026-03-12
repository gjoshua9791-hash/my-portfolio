import "./Home.css";
import profilePic from "../assets/profilePic.png";
import { Link } from "react-router-dom";


export default function Home() {
    return (
    <section className="home">
        <div className="home_hero">
            <div className="home_text">
                <p className="home_kicker">Hello there, I'm</p>
                <h1 className="home_name">Joshua David Garcia</h1>
                <h2 className="home_title">Mobile/Web Developer</h2>

                <p className="home_description">
                    I'm currently attending CSUB-AV as a junior computer science undergraduate student. I'm interested in many topics pertaining to web/software development and I have a few projects in web/mobile app development currently completed or being worked on.
                </p>

                <div className="home_actions">
                    <Link className="bttn bttn_primary" to="/portfolio" >View Portfolio</Link>
                    <Link className="bttn bttn_outline" to="/contact" >Contact Me</Link>
                </div>
            </div>

            <div className="home_imageWrap">
                <img className="home_image" src={profilePic} alt="Joshua David Garcia" />
            </div>

        </div>
        </section>
        );
}
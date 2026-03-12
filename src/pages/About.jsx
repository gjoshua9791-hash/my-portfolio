import "./About.css";
import aboutPic from "../assets/profilePic.png";

export default function About() {
    return (
        <section className="about">
            <div className="about_top">
                <div className="about_imageWrap">
                    <img className="about_image" src={aboutPic} alt="Joshua David Garcia" />
                </div>

                <div className="about_intro">
                    <h1 className="about_heading">About Me</h1>
                    <p className="about_name">Joshua David Garcia</p>
                    <p className="about_description">
                        I am a 21 year old undergraduate student in computer science wanting to expand my field of knowledge with the courses I’m taking as well as attending any opportunities that arise. I am an eager team player with strong communication skills. I am readily available to work and see any obstacle as an opportunity to learn.
                    </p>

                    <div className="about_meta">
                        <div className="about_chip">
                            <span className="about_chipLabel">Years of Experience</span>
                            <span className="about_chipValue">2.5+</span>
                        </div>

                        <div className="about_chip">
                            <span className="about_chipLabel">Based in</span>
                            <span className="about_chipValue">California</span>
                        </div>
                    </div>

                    <a className="about_resumebttn" href="/resume.pdf" download>Download Resume (PDF)</a>
                </div>
            </div>

            <div className="about_grid">
                <div className="about_card">
                    <h2 className="about_cardTitle">Specializations</h2>
                    <ul className="about_list">
                        <li>React/React Native Apps</li>
                        <li>Frontend Design</li>
                    </ul>
                </div>

                <div className="about_card">
                    <h2 className="about_cardTitle">Skills</h2>
                    <div className="about_skills">
                        <span className="skill_pill">Java</span>
                        <span className="skill_pill">JavaScript</span>
                        <span className="skill_pill">React/React Native</span>
                        <span className="skill_pill">HTML</span>
                        <span className="skill_pill">Git</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
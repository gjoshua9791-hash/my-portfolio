import "./Resume.css";

export default function Resume() {
    return (
        <section className="resume">
            <header className="resume_header">
                <h1 className="resume_title">Resume</h1>
                <p className="resume_summary">
                    Computer science student focused on front end development with experience in creating projects using Java and JavaScript. Strong in communcation and a meticulous team player.
                </p>
            </header>
            <div className="resume_grid">
                <div className="resume_left">
                    <div className="resume_section">
                        <h2 className="resume_sectionTitle">Technical Skills</h2>

                        <div className="resume_skillGroup">
                            <h3 className="resume_skillHeading">Languages</h3>
                            <div className="resume_pills">
                                <span className="skill_pill">Java</span>
                                <span className="skill_pill">JavaScript</span>
                                <span className="skill_pill">HTML</span>
                                <span className="skill_pill">CSS</span>
                            </div>
                        </div>


                        <div className="resume_skillGroup">
                            <h3 className="resume_skillHeading">Frameworks</h3>
                            <div className="resume_pills">
                                <span className="skill_pill">React</span>
                                <span className="skill_pill">React Native</span>
                            </div>
                        </div>

                             <div className="resume_skillGroup">
                            <h3 className="resume_skillHeading">Tools</h3>
                            <div className="resume_pills">
                                <span className="skill_pill">VS Code</span>
                                <span className="skill_pill">Git/Github</span>
                                <span className="skill_pill">Node.js</span>
                            </div>
                        </div>

                            <div className="resume_skillGroup">
                            <h3 className="resume_skillHeading">Strengths</h3>
                            <div className="resume_pills">
                                <span className="skill_pill">Communication</span>
                                <span className="skill_pill">Teamwork</span>
                            </div>
                        </div>
                    </div>

                                        <div className="resume_section">
                        <h2 className="resume_sectionTitle">Projects</h2>

                        <div className="resume_item">
                            <div className="resume_itemTop">
                                <p className="resume_itemTitle">Library Simulator</p>
                                <p className="resume_itemDate">2025</p>
                            </div>
                            <p className="resume_itemMeta">Java • JavaScript </p>
                            <ul className="resume_list">
                                <li>Utilized polymorphism to simulate a Library's operations and functions by combining inheritance and composition.</li>
                            </ul>
                        </div>


                        <div className="resume_item">
                            <div className="resume_itemTop">
                                <p className="resume_itemTitle">Portfolio Website</p>
                                <p className="resume_itemDate">2026</p>
                            </div>
                            <p className="resume_itemMeta">React • React Router • Vercel </p>
                            <ul className="resume_list">
                                <li>Built a multi-page React web app that utilizes client-side routing.</li>
                                <li>Deployed website to Vercel with auto-updates from Github main.</li>
                            </ul>
                            </div>
                        </div>
                </div>

                <div className="resume_right">
                    <div className="resume_section">
                        <h2 className="resume_sectionTitle">Education</h2>
                        
                        <div className="resume_item">
                            <div className="resume_itemTop">
                                <p className="resume_itemTitle">B.S. Computer Science (In Progress)</p>
                                <p className="resume_itemDate">2025 - Present</p>
                            </div>
                            <p className="resume_itemMeta">CSU Bakersfield</p>
                            <ul className="resume_list">
                                <li>Completed Coursework: Software Engineering, Database Systems, Computer Architecture II: Assembly Language Programming, Programming Languages</li>
                                <li>In Progress: Artificial Intelligence, Internet of Things, Application Development</li>
                            </ul>
                        </div>

                        <div className="resume_item">
                            <div className="resume_itemTop">
                                <p className="resume_itemTitle">A.S. Computer Science</p>
                                <p className="resume_itemDate">2022 - 2025</p>
                            </div>
                            <p className="resume_itemMeta">Antelope Valley College</p>
                            <ul className="resume_list">
                                <li>Completed Coursework: Programming Fundamentals, Data Structures, Discrete Structures, Computer Architecture I: Assembly Language Programming</li>
                            </ul>
                        </div>
                    </div>



                        <div className="resume_section">
                        <h2 className="resume_sectionTitle">Experience</h2>

                        <div className="resume_item">
                            <div className="resume_itemTop">
                                <p className="resume_itemTitle">Team Member - Wana Iguana</p>
                                <p className="resume_itemDate">2020 - Present</p>
                            </div>
                            <p className="resume_itemMeta">Customer Service • Teamwork </p>
                            <ul className="resume_list">
                                <li>Provided consistent, high-quality customer service in a fast-paced restaurant environment, assisting customers with orders, inquiries, and issue resolution.</li>
                                <li>Maintained a clean and organized workspace by completing daily sanitation and closing duties.</li>
                                <li>Collaborated with team members to ensure smooth daily operations and a positive customer experience.</li>
                            </ul>
                        </div>
                    </div>
                 </div>
            </div>

            <div className="resume_downloadWrap">
                <a className="resume_downloadbttn" href="/resume.pdf" download>Download Resume (PDF)</a>
            </div>
        </section>
        );
}
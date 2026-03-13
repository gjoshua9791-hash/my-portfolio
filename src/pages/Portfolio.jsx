import projects from "../data/projects";
import { Link } from "react-router-dom";
import "./Portfolio.css"

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h1>Portfolio</h1>
            <div className="portfolio_grid">
                {projects.map((project) => (
                    <Link key={project.id} to={`/portfolio/${project.slug}`} className="portfolio_card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        </Link>
                ))}
                </div>
            
        </section>
        );
}
import projects from "../data/projects";
import { Link, useParams } from "react-router-dom";
import "./Portfolio.css";

export default function PortfolioDetail() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!projects) {
        return (
            <section className="portfolio_detail"> 
                <h1>Project Not Found</h1>
                <Link className="portfolio_back" to="/portfolio">Back to Portfolio</Link>
            </section>
        );
    }
    return (
        <section className="portfolio_detail">
            <Link className="portfolio_back" to="/portfolio">Back to Portfolio</Link>
            <div className="portfolio_detailCard">
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            <h3 className="portfolio_sectionTitle">Tech Stack</h3>
            <div className="portfolio_pills">
            {project.tech.map((t) => 
                (<span key={t} className="portfolio_pill">{t}</span>))}

            </div>
            <p>{project.details}</p>

            {project.github && (
                <a className="portfolio_linkbttn" href={project.github} target="_blank" rel="nereferrer">
                    View on Github
                </a>
            )}
            </div>
        </section>
    );
}
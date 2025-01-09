import projectData from "../../data/data.json";
import "./Card.scss";

interface CardProps {
    darkMode: boolean;
}

interface Project {
    id: string;
    title: string;
    previewImage: {
        src: string;
        alt: string;
    };
    links: {
        url: string;
        icon: { src: string; alt: string };
        iconWhite: { src: string };
    }[];
    description: string;
    stack: string;
}

const Card: React.FC<CardProps> = ({ darkMode }) => {
    const projects = projectData.projects;

    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <article className="projects-card" key={index}>
                    <p className="projects-card__title">{project.title}</p>
                    <img
                        src={project.previewImage.src}
                        alt={project.previewImage.alt}
                        className="projects-card__preview"
                    />
                    <div className="icon-container">
                        {project.links.map((link, linkIndex) => (
                            <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="icon"
                                    src={darkMode ? link.iconWhite.src : link.icon.src}
                                    alt={darkMode ? link.iconWhite.alt || link.icon.alt : link.icon.alt}
                                />
                            </a>
                        ))}
                    </div>
                    <div className="projects-card__overlay">
                        <p>{project.description}</p>
                        <p>{project.stack}</p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Card;
import { useState, useRef } from "react";

const projects = Array.from({ length: 5 }, (_, i) => `Project ${i + 1}`);

const Projects = () => {
    const [hoverStyle, setHoverStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const containerRef = useRef(null);

    const handleMouseEnter = (e: any) => {
        const { offsetLeft, offsetWidth } = e.target;
        setHoverStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
    };

    const handleMouseLeave = () => {
        setHoverStyle((prev) => ({ ...prev, opacity: 0 }));
    };

    return (
        <ul className="projects-container" ref={containerRef} onMouseLeave={handleMouseLeave}>
            <div className="hover-bg" style={hoverStyle} />
            {projects.map((project, index) => (
                <li key={index} className="project-tab" onMouseEnter={handleMouseEnter}>
                    {project}
                </li>
            ))}
        </ul>
    );
};

export default Projects;

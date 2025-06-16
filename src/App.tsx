import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import T3Radio from "./components/project1/T3Radio";

const App = () => {
  const [view, setView] = useState<"about" | "projects">("about");

  const handleBackToAbout = () => {
    setView("about");
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {view === "about" && (
          <motion.div
            key="about"
            className="profile-container"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="profile-name">boyan d.</div>
            <div className="profile-position">software engineer</div>
            <nav className="profile-nav">
              <a href="#about" className="profile-nav-link">
                About
              </a>
              <a href="#connect" className="profile-nav-link">
                Connect
              </a>
              <button
                className="profile-nav-link"
                onClick={() => setView("projects")}
              >
                Projects
              </button>
            </nav>
          </motion.div>
        )}
        {view === "projects" && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
          >
            <Projects onBack={handleBackToAbout} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

const Projects = ({
  projectIndex = 0,
  onBack,
}: {
  projectIndex?: number;
  onBack?: () => void;
}) => {
  return <ProjectView projectIndex={projectIndex} onBack={onBack} />;
};

interface ProjectViewProps {
  projectIndex?: number;
  onBack?: () => void;
}

export const ProjectView = ({
  projectIndex = 0,
}: // onBack,
ProjectViewProps) => (
  <div className="project-t3-container">
    <div className="project-t3-card">
      <div className="project-index-indicator">
        {String(projectIndex + 1).padStart(2, "0")}.
      </div>

      {/* {onBack && (
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
      )} */}
      {projectIndex === 0 && (
        <div style={{ marginBottom: "1.5rem" }}>
          <T3Radio />
        </div>
      )}
      <div className="project-quote-indicator">
        <span className="project-quote-symbol">“</span>
        <span>
          Good design is{" "}
          <span className="project-quote-highlight">innovative</span>.
        </span>
        <span className="project-quote-symbol">”</span>
      </div>
    </div>
  </div>
);

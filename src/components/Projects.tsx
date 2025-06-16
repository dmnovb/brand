import T3Radio from './project1/T3Radio';

interface ProjectViewProps {
  projectIndex?: number;
  onBack?: () => void;
}

export const ProjectView = ({
  projectIndex = 0,
  // onBack,
}: ProjectViewProps) => (
  <div className="project-t3-container">
    <div className="project-t3-card">
      <div className="project-index-indicator">{String(projectIndex + 1).padStart(2, '0')}.</div>

      {/* {onBack && (
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
      )} */}
      {projectIndex === 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <T3Radio />
        </div>
      )}
      <div className="project-quote-indicator">
        <span className="project-quote-symbol">“</span>
        <span>
          Good design is <span className="project-quote-highlight">innovative</span>.
        </span>
        <span className="project-quote-symbol">”</span>
      </div>
    </div>
  </div>
);

const Projects = ({ projectIndex = 0, onBack }: { projectIndex?: number; onBack?: () => void }) => {
  return <ProjectView projectIndex={projectIndex} onBack={onBack} />;
};

export default Projects; 
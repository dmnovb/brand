import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Projects from './components/Projects';

const App = () => {
  const [view, setView] = useState<'about' | 'projects'>('about');

  const handleBackToAbout = () => {
    setView('about');
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {view === 'about' && (
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
              <a href="#about" className="profile-nav-link">About</a>
              <a href="#connect" className="profile-nav-link">Connect</a>
              <button className="profile-nav-link" onClick={() => setView('projects')}>Projects</button>
            </nav>
          </motion.div>
        )}
        {view === 'projects' && (
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
}

export default App;

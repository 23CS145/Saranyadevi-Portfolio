import { useState } from 'react';
import '../assets/styles/global.css';
import crackzy from '../assets/images/crackzy.png';
import giftly from '../assets/images/giftly.png';
import portfolio from '../assets/images/portfolio.png';

const projects = [
  {
  id: 1,
  title: 'Crackzy - Gamified Exam Prep',
  description: 'An interactive online platform for competitive exam preparation with mock tests, study notes, current affairs, and gamified learning tools like quizzes and memory games.',
  // tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'Tailwind CSS'],
  image: crackzy, 
  link: 'https://crackzy.vercel.app/', 
  github: 'https://github.com/23CS145/Crackzy-frontend' 
},  
    {
  id: 2,
  title: 'Giftly - Smart Gifting App',
  description: 'A modern gifting web app that allows users to browse, select, and send personalized gifts with sleek UI and smooth user experience.',
  // tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT', 'CSS Animations'],
  image: giftly, 
  link: 'https://giftly-frontend-silk.vercel.app/', 
  github: 'https://github.com/23CS145/giftly-frontend' 
  },
 
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website to showcase my work and skills.',
    // tags: ['React', 'CSS', 'Vite'],
    image: portfolio,
    link: 'https://saranyadevi-portfolio-six.vercel.app/',
    github: 'https://github.com/23CS145/Saranyadevi-Portfolio'
  }
];

const Projects = () => {
  // const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        {/* <div className="project-filters">
          {['All', 'React', 'Node.js', 'MongoDB'].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div> */}
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {/* <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div> */}
                <div className="project-links">
                  <a href={project.link} className="link-btn">Live Demo</a>
                  <a href={project.github} className="link-btn">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
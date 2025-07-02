import '../assets/styles/global.css';

const skills = [
  { name: 'Java', level: 80 },
  { name: 'C', level: 85 },
  { name: 'C++', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Express', level: 75 },
  { name: 'MongoDB', level: 80 },
  { name: 'HTML/CSS', level: 80 },
  { name: 'JavaScript', level: 60 },
  
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
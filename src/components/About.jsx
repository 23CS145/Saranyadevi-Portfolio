import '../assets/styles/global.css';
import mypic from '../assets/images/mypic.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with expertise in the MERN stack.
              I love creating beautiful, functional, and user-centered digital experiences.
            </p>
            <p>
              With a background in computer science and several years of experience,
              I bring both technical knowledge and creative problem-solving skills to every project.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>
          <div className="about-image">
            {/* Replace with your image */}
            <div className="image-placeholder">
              <img src={mypic} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
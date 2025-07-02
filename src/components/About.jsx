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
              I am a passionate MERN Stack Developer. I have built several projects using the MERN stack and completed a MERN Stack internship conducted by BETTER TOMORROW INSTITUTION at Sri Eshwar College of Engineering.
            </p>
            <p>
              Currently, I am pursuing a Modern Full Stack Development internship, which is also being conducted at Sri Eshwar College of Engineering. I am always excited to learn new technologies and expand my skill set.
            </p>
            <h3>Educational Background:</h3>
            <ul>
              <li>Schooling: Swamy Chidbhavananda Matric Higher Secondary School</li>
              <li>SSLC (2020–2021)</li>
              <li>HSC First Year (2021–2022): <strong>87%</strong></li>
              <li>HSC Second Year (2022–2023): <strong>91.8%</strong></li>
            </ul>
            <ul>
              <li>College: Sri Eshwar College of Engineering (2023–2027)</li>
              <li>Current CGPA: <strong>8.3</strong> (up to 3rd semester)</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <img src={mypic} alt="My Profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

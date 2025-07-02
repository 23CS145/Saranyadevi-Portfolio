import '../assets/styles/global.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://github.com/23CS145" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/saranyadevi-v" className="social-link">LinkedIn</a>
            
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Saranyadevi V. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
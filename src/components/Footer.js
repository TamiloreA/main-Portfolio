const Footer = () => {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <p>
                <i className="fas fa-copyright"></i> {currentYear} Tammy. Crafted with <i className="fas fa-heart"></i>{" "}
                and lots of <i className="fas fa-coffee"></i>
              </p>
            </div>
            <div className="footer-right">
              <div className="social-links">
                <a href="#" className="social-link" title="GitHub">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://www.linkedin.com/in/akinsola-oluwatamilore-b7337b328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-link" title="LinkedIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://x.com/tammyboi__?s=21&t=vEGfmypqeLoPDwjZy2Piow" className="social-link" title="Twitter">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="mailto:tamiloreakinsola@gmail.com" className="social-link" title="Email">
                  <i className="fas fa-envelope"></i> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
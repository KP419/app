import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Looney Farms</h3>
          <p>
            Looney Farms is a family-owned organic farm committed to sustainable
            agriculture. You will love our products! follow us on all socials for more.
          </p>
        </div>
        <div className="footer-right">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
            
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Looney Farms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

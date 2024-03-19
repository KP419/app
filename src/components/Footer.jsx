import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Looney Farms</h3>
          <p>Looney Farms is a family-owned organic farm committed to sustainable agriculture. We cultivate a wide variety of fruits and vegetables using eco-friendly farming methods, ensuring our produce is bursting with natural flavors and free from harmful chemicals. Experience the taste of nature's bounty at its finest by visiting our farm stand or joining our seasonal farm tours.</p>
        </div>
        <div className="footer-right">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Looney Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
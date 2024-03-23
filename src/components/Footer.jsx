import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/Kids">Kids</Link>
          <Link to="#">Home & Living</Link>
          <Link to="#">Beauty</Link>
        </div>

        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/Kids">Kids</Link>
          <Link to="#">Home & Living</Link>
          <Link to="#">Beauty</Link>
        </div>

        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/Kids">Kids</Link>
          <Link to="#">Home & Living</Link>
          <Link to="#">Beauty</Link>
        </div>
      </div>
      <hr />

      <div className="copyright">
        © 2023 www.myntra.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

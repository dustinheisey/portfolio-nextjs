const Footer = props => {
  return (
    <footer className="display-f align-c justify-sb bg-p-d padding-lg width-p-lg footer">
      <p className="color-l">
        &copy; <span>Dustin Heisey</span>
      </p>
      <nav>
        <ul className="display-f justify-se">
          <li className="margin-r-sm">
            <a href="/services" className="background color-l padding-sm">
              Services
            </a>
          </li>
          <li className="margin-r-sm">
            <a href="/contact" className="background color-l padding-sm">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

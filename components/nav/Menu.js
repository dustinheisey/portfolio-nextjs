const Menu = props => {
  return (
    <ul className="bg-p-d direction-c align-l justify-c height-a padding-lg border-r-bl-lg border-r-br-lg display-f">
      <li className="margin-b-lg">
        <a href="/" className="color-l text-lg padding-sm background">
          Home
        </a>
      </li>
      <li className="margin-b-lg">
        <a href="/about" className="color-l text-lg padding-sm background">
          About
        </a>
      </li>
      <li className="margin-b-lg">
        <a href="/services" className="color-l text-lg padding-sm background">
          Services
        </a>
      </li>
      <li className="margin-b-lg">
        <a href="/works" className="color-l text-lg padding-sm background">
          Works
        </a>
      </li>
      <li>
        <a href="/contact" className="color-l text-lg padding-sm background">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Menu;

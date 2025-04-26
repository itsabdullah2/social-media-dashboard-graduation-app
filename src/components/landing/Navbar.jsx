import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    {
      label: 'Home',
      path: '#home',
    },
    {
      label: 'About',
      path: '#about',
    },
    {
      label: 'Try it now',
      path: '#try-it-now',
    },
  ];

  return (
    <nav className="flex items-center justify-between py-5 relative">
      <a href="#home" className="">
        <h3>TrendTrack</h3>
      </a>

      <ul className="flex items-center gap-2">
        {navItems.map((item, i) => (
          <a href={item.path} key={i}>
            <li>{item.label}</li>
          </a>
        ))}
      </ul>

      {/* Style the text of the link as gradient */}
      <Link
        to="/signin"
        className={`text-medium font-bold bg-gradient-to-r from-blueberry to-cyan text-transparent bg-clip-text`}
      >
        Try it now
      </Link>
    </nav>
  );
};

export default Navbar;

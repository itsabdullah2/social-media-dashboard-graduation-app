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

      <Link to="/dashboard">Try it now</Link>
    </nav>
  );
};

export default Navbar;

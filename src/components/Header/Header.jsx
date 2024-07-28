import CustomNavLink from "../CustomNavLink/CustomNavLink";

function Header() {
  return (
    <>
      <nav>
        <CustomNavLink to="/">Home</CustomNavLink>
        <CustomNavLink to="/about">About</CustomNavLink>
        <CustomNavLink to="/resume">Resume</CustomNavLink>
        <CustomNavLink to="/services">Services</CustomNavLink>
        <CustomNavLink to="/portfolio">Portfolio</CustomNavLink>
        <CustomNavLink to="/contact">Contact</CustomNavLink>
      </nav>
    </>
  );
}

export default Header
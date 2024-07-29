import CustomNavLink from "../CustomNavLink/CustomNavLink";

function Header() {
  return (
    <div className=" flex bg-black items-center h-20">
      <div className="shrink w-[10%] "></div>
      <div className=" flex justify-between w-[80%]">
        <h1 className="font-extrabold text-4xl text-white">Kuldeep Verma</h1>
        <nav className="" >
          <CustomNavLink to="/">Home</CustomNavLink>
          <CustomNavLink to="/about">About</CustomNavLink>
          <CustomNavLink to="/resume">Resume</CustomNavLink>
          {/* <CustomNavLink to="/services">Services</CustomNavLink>
          <CustomNavLink to="/portfolio">Portfolio</CustomNavLink> */}
          <CustomNavLink to="/contact">Contact</CustomNavLink>
        </nav>
      </div>
      <div className="shrink w-[10%] "></div>
    </div>
  );
}

export default Header
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <div>create header using NavLink

      <nav>
        <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
          Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
          About
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
          Contact
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
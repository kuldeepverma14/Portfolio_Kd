/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, children ,close,setClose}) => (
    <NavLink onClick={()=>setClose(!close)}
        to={to}
        end={to === '/'}
        className={({ isActive }) =>
            `relative inline-block px-3 xsm:px-5 py-2 
             text-white
             transition-colors duration-300 
             after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bg-blue-500 after:bottom-0
             after:h-0.5 after:w-0  after:transition- after:duration-300 
             hover:after:w-3/5 hover:text-blue-500
             ${isActive ? 'after:w-2/5 hover:text-blue-500' : 'after:w-0'}`
        }
    >
        {children}
    </NavLink>
);

export default CustomNavLink

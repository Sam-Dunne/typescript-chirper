import * as React from 'react';
import { NavLink } from 'react-router-dom';


/* HOOK REACT EXAMPLE */
const Navbar = (props: NavbarProps) => {

	return (
		<nav className="nav justify-content-around align-items-center bg-light shadow p-3">
            <NavLink to="/" className="btn btn-link">Home</NavLink>
           <h4 className="display-2 mx-5 mb-2">Chirper</h4>
            <NavLink to="/add" className="btn btn-link">Make Chirp</NavLink>
        </nav>
	);
};

interface NavbarProps {}

export default Navbar;
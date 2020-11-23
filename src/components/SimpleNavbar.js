import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "reactstrap";

import bgimage from "../red-wine-wallpaper-1.jpg";

const CustomNavbar = (props) => {
	return (
		<Navbar
			color="dark"
			dark
			expand="md"
			style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
			className="py-5"
		>
			<NavbarBrand href="/"> {"  "}</NavbarBrand>
		</Navbar>
	);
};

Navbar.propTypes = {
	light: PropTypes.bool,
	dark: PropTypes.bool,
	fixed: PropTypes.string,
	color: PropTypes.string,
	role: PropTypes.string,
	expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	// pass in custom element to use
};

export default CustomNavbar;

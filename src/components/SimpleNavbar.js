import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "reactstrap";

const CustomNavbar = (props) => {
	return (
		<NavbarBrand color="dark" dark expand="md" className="py-5">
			<NavbarBrand href="/"> {"  "}</NavbarBrand>
		</NavbarBrand>
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	InputGroup,
	InputGroupButtonDropdown,
	Input,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	InputGroupText,
	Row,
	Col,
	InputGroupAddon,
} from "reactstrap";

const SortAndSearch = (props) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(search(searchTerm));
	// }, [dispatch]);

	return (
		<Row className="mb-3">
			<Col md={3}>
				<h3 className="wine-selection-title"> Wine Selection </h3>
			</Col>
			<Col md={{ size: "3", offset: "0", ml: "4" }}>
				<InputGroup>
					<InputGroupAddon addonType="prepend">
						<InputGroupText addonType="">To</InputGroupText>
					</InputGroupAddon>
					<Input type="text" placeholder="Search" />
				</InputGroup>
			</Col>
			<Col
				md={{ size: "3", offset: 2 }}
				className="justify-content-center d-flex"
			>
				<InputGroup>
					<InputGroupButtonDropdown
						addonType="append"
						isOpen={dropdownOpen}
						toggle={toggleDropDown}
					>
						<DropdownToggle caret>Button Dropdown</DropdownToggle>
						<DropdownMenu>
							<DropdownItem header>Header</DropdownItem>
							<DropdownItem disabled>Action</DropdownItem>
							<DropdownItem>Another Action</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Another Action</DropdownItem>
						</DropdownMenu>
					</InputGroupButtonDropdown>
				</InputGroup>
			</Col>
		</Row>
	);
};

export default SortAndSearch;

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
	Form,
	FormGroup,
	Label,
	InputGroupAddon,
} from "reactstrap";

import { searchWine } from "../state/ducks/homePage/actions";

const SortAndSearch = (props) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

	const dispatch = useDispatch();
	const handleSearch = (e) => {
		e.preventDefault();
		console.log("handleSearch -> searchTerm", searchTerm);
		dispatch(searchWine(searchTerm));
	};

	return (
		<Row className="mb-3">
			<Col md={3}>
				<h3 className="wine-selection-title"> Wine Selection </h3>
			</Col>
			<Col md={{ size: "3", offset: "0", ml: "4" }}>
				<Form onSubmit={handleSearch}>
					<FormGroup>
						<Input
							type="search"
							name="search"
							id="exampleSearch"
							placeholder="search placeholder"
							onChange={(e) => setSearchTerm(e.target.value)}
							value={searchTerm}
						/>
					</FormGroup>
				</Form>
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

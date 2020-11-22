import React, { useState, useEffect } from "react";
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
	Badge,
	Button,
} from "reactstrap";

import { searchWine } from "../state/ducks/homePage/actions";

const SortAndSearch = (props) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchFilter, setSearchFilter] = useState("");
	const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

	const dispatch = useDispatch();
	const handleSearch = (e) => {
		e.preventDefault();
		setSearchFilter(searchTerm);
	};

	useEffect(() => {
		dispatch(searchWine(searchFilter));
		if (searchTerm === searchFilter) setSearchTerm("");
	}, [searchFilter]);

	const handleFilterDisable = (e) => {
		setSearchFilter("");
	};

	return (
		<>
			<Row className="mb-3">
				<Col md={3} xs={3}>
					<h3 className="wine-selection-title"> Wine Selection </h3>
				</Col>
				<Col
					xs={{ size: "3", offset: "0", ml: "4" }}
					md={{ size: "3", offset: "0", ml: "4" }}
				>
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
					xs={{ size: "3", offset: 2 }}
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
			<Row className="mb-3">
				{searchFilter ? Word(searchFilter, handleFilterDisable) : null}
				{searchFilter ? Word(searchFilter, handleFilterDisable) : null}
			</Row>
		</>
	);
};

const Word = (word, handleFunc) => (
	<Col xs={{ size: "auto", offset: 1 }} md={{ size: "auto", offset: 1 }}>
		<InputGroup>
			<InputGroupText>{word}</InputGroupText>
			<InputGroupAddon addonType="append">
				<Button onClick={handleFunc}>X</Button>
			</InputGroupAddon>
		</InputGroup>
	</Col>
);

export default SortAndSearch;

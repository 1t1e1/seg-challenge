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

import {
	searchWine,
	filterStock,
	sortByPrice,
} from "../state/ducks/homePage/actions";

const SortAndSearch = (props) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchFilter, setSearchFilter] = useState("");
	const [sortBy, setSortBy] = useState("");

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

	const handleDropDown = (e) => {
		dispatch(filterStock(e.target.value));
		console.log("handle dd", e.target.value);
	};

	const handleSort = (e) => {
		let value = e.target.value;
		if (value === "default") {
			setSortBy("");
		} else {
			setSortBy(value);
		}
	};
	const handleSortByDisable = () => {
		setSortBy("");
	};

	useEffect(() => {
		dispatch(sortByPrice(sortBy));
	}, [sortBy]);

	return (
		<>
			<Row className="my-1">
				<Col
					xs={{ size: "auto", offset: "auto", ml: "1" }}
					md={{ size: "3", offset: "auto", ml: "4" }}
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
					xs={{ size: "auto", offset: "2" }}
					md={{ size: "auto", offset: "2" }}
					className="d-flex justify-content-end"
				>
					<DropDown
						text="Sort By"
						options={["default", "dec", "asc"]}
						handleFunc={handleSort}
					></DropDown>
					<DropDown
						text="Show Only in Stock"
						options={[true, false]}
						handleFunc={handleDropDown}
					></DropDown>
				</Col>
			</Row>
			<Row className="mb-1">
				{searchFilter ? Word(searchFilter, handleFilterDisable) : null}
				{sortBy ? Word("Sort By " + sortBy, handleSortByDisable) : null}
			</Row>
		</>
	);
};

const Word = (word, handleFunc) => (
	<Col xs={{ size: "auto", offset: 0 }} md={{ size: "auto", offset: 1 }}>
		<InputGroup>
			<InputGroupText>{word}</InputGroupText>
			<InputGroupAddon addonType="append">
				<Button onClick={handleFunc}>X</Button>
			</InputGroupAddon>
		</InputGroup>
	</Col>
);

const DropDown = ({ text, options = [], handleFunc }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

	return (
		<InputGroup className="ml-3">
			<InputGroupButtonDropdown
				addonType="append"
				isOpen={dropdownOpen}
				toggle={toggleDropDown}
			>
				<DropdownToggle caret>{text}</DropdownToggle>
				<DropdownMenu>
					{options.map((opt) => (
						<DropdownItem
							name={opt}
							value={opt}
							onClick={(e) => {
								handleFunc(e);
							}}
						>
							{opt.toString()}
						</DropdownItem>
					))}
				</DropdownMenu>
			</InputGroupButtonDropdown>
		</InputGroup>
	);
};

export default SortAndSearch;

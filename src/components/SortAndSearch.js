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
	InputGroupAddon,
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
					md={{ size: "3", offset: "1", ml: "4" }}
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
					xs={{ size: "auto", offset: "auto" }}
					md={{ size: "auto", offset: "2" }}
					className="d-flex justify-content-end"
				>
					<DropDown
						text="Sort By"
						options={[
							{
								value: "",
								text: "Sort By",
							},
							{
								value: "dec",
								text: "Dec",
							},
							{
								value: "asc",
								text: "Asc",
							},
						]}
						handleFunc={handleSort}
						state={sortBy}
					></DropDown>
					<DropDown
						options={[
							{
								value: true,
								text: "Only in Stock",
							},
							{
								value: false,
								text: "All Products",
							},
						]}
						handleFunc={handleDropDown}
						choose={filterStock}
					></DropDown>
				</Col>
			</Row>
			<Row className="mb-1">
				{searchFilter && Word(searchFilter, handleFilterDisable)}
				{sortBy && Word("Sort By " + sortBy.toUpperCase(), handleSortByDisable)}
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

const DropDown = ({ options = [], handleFunc }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

	return (
		<div>
			<InputGroup className="ml-3">
				<InputGroupButtonDropdown
					addonType="append"
					isOpen={dropdownOpen}
					toggle={toggleDropDown}
				>
					<DropdownToggle caret>{options[0].text}</DropdownToggle>
					<DropdownMenu>
						{options.map((opt) => (
							<DropdownItem
								key={opt.text}
								name={opt.text}
								value={opt.value}
								onClick={(e) => {
									handleFunc(e);
								}}
							>
								{opt.text == "Sort By" ? "Default" : opt.text}
							</DropdownItem>
						))}
					</DropdownMenu>
				</InputGroupButtonDropdown>
			</InputGroup>
		</div>
	);
};

export default SortAndSearch;

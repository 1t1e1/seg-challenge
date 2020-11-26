import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
	CustomInput,
} from "reactstrap";

import {
	searchWine,
	filterStock,
	sortByPrice,
} from "../state/ducks/homePage/actions";
import Switch from "./Switch";

const SortAndSearch = () => {
	const { searchTermRedux, filterByStockRedux, sortByRedux } = useSelector(
		(state) => ({
			searchTermRedux: state.homePage.searchTerm,
			filterByStockRedux: state.homePage.filterByStock,
			sortByRedux: state.homePage.sortBy,
		})
	);
	const [searchTerm, setSearchTerm] = useState("");

	const dispatch = useDispatch();

	const handleSearch = (e) => {
		e.preventDefault();
		dispatch(searchWine(searchTerm));
	};

	const handleSearchDisable = (e) => {
		dispatch(searchWine(""));
	};

	const handleDropDown = (e) => {
		if (e) {
			dispatch(filterStock("1"));
		} else {
			dispatch(filterStock("0"));
		}
	};

	const handleSort = (e) => {
		let value = e.target.value;
		dispatch(sortByPrice(value));
	};
	const handleSortByDisable = () => {
		dispatch(sortByPrice(""));
	};

	return (
		<>
			<Row className="">
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
					></DropDown>
					<Switch
						initialState={filterByStockRedux === "1"}
						handleFunc={handleDropDown}
					></Switch>
				</Col>
			</Row>
			<Row className="mb-1">
				{searchTermRedux && Word(searchTermRedux, handleSearchDisable)}
				{sortByRedux &&
					Word("Sort By " + sortByRedux.toUpperCase(), handleSortByDisable)}
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

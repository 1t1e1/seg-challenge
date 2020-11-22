import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "reactstrap";

import CardsContainer from "../components/CardsContainer";
import CompanyPic from "../components/CompanyPic";
import SimpleNavbar from "../components/SimpleNavbar";
import { getData } from "../state/ducks/homePage/actions";

const API_ENDPOINT = "https://proto.segmentify.com/sample_products.json";
// "http://proto.segmentify.com/sample_products.json";

export default function HomePage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getData(API_ENDPOINT));
	}, [dispatch]);

	return (
		<Container fluid>
			<SimpleNavbar> </SimpleNavbar>
			<CompanyPic></CompanyPic>
			<CardsContainer></CardsContainer>
		</Container>
	);
}

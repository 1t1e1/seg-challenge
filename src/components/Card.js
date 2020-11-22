import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Row,
	Col,
} from "reactstrap";

import "./Card.css";

const CustomCard = (props) => {
	// console.log("CustomCard -> props", props);
	// console.log("CustomCard -> props.image", props.image);
	return (
		<Card className="text-center">
			<Row>
				<Col md="12">
					<span className="product-indirim">FIRSAT!</span>
					<CardImg
						className="img-wine"
						src={props.image}
						alt="Card image cap"
					/>
				</Col>
				<Col md="12">
					<CardBody>
						<CardTitle tag="h4">{props.name}</CardTitle>
						<CardSubtitle tag="h6" className="mb-2 text-muted">
							{props.brand}
						</CardSubtitle>
						<CardText>${props.price}</CardText>
						<Button>Buy</Button>
					</CardBody>
				</Col>
			</Row>
		</Card>
	);
};

export default CustomCard;

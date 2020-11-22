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
						{/* <CardSubtitle tag="h6" className="mb-2 text-muted">
							{props.brand}
						</CardSubtitle> */}
						<CardText></CardText>
						<Button>
							${props.price}
							Buy
						</Button>
					</CardBody>
				</Col>
			</Row>
		</Card>
	);
};

export default CustomCard;

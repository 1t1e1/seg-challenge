import React, { useState } from "react";
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
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import { FcLike } from "react-icons/fc";

import "./Card.css";

const CustomCard = (props) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);
	console.log(props);
	return (
		<Card className="text-center mt-3">
			<Row>
				<Col md="12">
					<span className="product-indirim">{props.priceText}</span>
					{props.params.likeCount > 0 && (
						<div className="kalp-like">
							<FcLike />
							<span>+{props.params.likeCount} </span>
						</div>
					)}
					<CardImg
						className="img-wine"
						src={props.image}
						alt="Card image cap"
					/>
				</Col>
				<Col md="12">
					<CardBody>
						<CardTitle tag="h4">
							{props.priceText}{" "}
							<small
								style={{
									textDecorationLine: "line-through",
									textDecorationStyle: "solid",
									color: "gray",
								}}
							>
								{props.oldPriceText}
							</small>
						</CardTitle>
						<CardSubtitle tag="h6" className="mb-2 text-muted">
							{props.name}
						</CardSubtitle>
						<CardText></CardText>
						<Button
							color={props.inStock ? "warning" : "secondary"}
							disabled={!props.inStock}
						>
							Buy
						</Button>
						<Button color="info" className="ml-5" onClick={toggle}>
							View Detail
						</Button>
					</CardBody>
				</Col>
			</Row>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Detail for {props.productId}</ModalHeader>
				<ModalBody>
					<Row>
						<Col xs="4" md="6">
							<CardImg
								className="img-wine"
								src={props.image}
								alt="Card image cap"
							/>
						</Col>
						<Col xs="6" md="6">
							<h4>{props.name}</h4>
						</Col>
					</Row>
				</ModalBody>
				<ModalFooter>
					<Button
						color={props.inStock ? "warning" : "secondary"}
						onClick={toggle}
					>
						Buy One
					</Button>{" "}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</Card>
	);
};

export default CustomCard;

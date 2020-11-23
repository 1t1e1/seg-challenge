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
} from "reactstrap";
import { FcLike } from "react-icons/fc";

import useModal from "./useModal";
import "./Card.css";

const CustomCard = (props) => {
	const [toggle, ModalComp] = useModal();

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
						className="img-wine mt-3"
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
			<ModalComp {...props}></ModalComp>
		</Card>
	);
};

export default CustomCard;

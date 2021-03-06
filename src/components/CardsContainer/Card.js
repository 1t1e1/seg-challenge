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
import { FcLike } from "react-icons/fc";

import PriceDisplay from "./PriceDisplay";
import "./Card.sass";

const CustomCard = (props) => {
	return (
		<Card className="text-center shadow-lg p-3 mb-3 bg-white rounded zoom-effect">
			<Row>
				<Col md="12">
					<span className="product-indirim">{props.priceText}</span>
					{props.params.likeCount > 0 && (
						<div className="kalp-like">
							<FcLike />
							<span> {props.params.likeCount} </span>
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
						<CardSubtitle tag="h6" className="mb-2 text-muted">
							{props.name}
						</CardSubtitle>

						<CardText></CardText>
						<PriceDisplay {...props}></PriceDisplay>

						<Button
							color={props.inStock ? "warning" : "secondary"}
							disabled={!props.inStock}
						>
							Buy
						</Button>
						<Button
							color="info"
							className="ml-2"
							onClick={() => {
								props.handleModal(props.productId);
							}}
						>
							Detail
						</Button>
					</CardBody>
				</Col>
			</Row>
		</Card>
	);
};

export default CustomCard;

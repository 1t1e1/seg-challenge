import React, { useState } from "react";
import {
	CardImg,
	Button,
	Row,
	Col,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";

import PriceDisplay from "./PriceDisplay";

const CustomModal = (props) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const ModalComp = (props) => {
		return (
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Detail for {props.name}</ModalHeader>
				<ModalBody>
					<Row>
						<Col xs="4" md="4" className="text-center ">
							<CardImg
								className="img-wine-modal"
								src={props.image}
								alt="Card image cap"
							/>
						</Col>
						<Col xs="6" md="6" className="text-left">
							<Info
								valueOfInfo={props.name}
								title="Wine Name"
								className="product-title"
							></Info>
							<Info
								valueOfInfo={props.productId}
								title="Id"
								className="product-id"
							></Info>
							<PriceDisplay {...props} className="modal-price"></PriceDisplay>
							<Info valueOfInfo={props.params.tastes} title="Tastes"></Info>
							<Info valueOfInfo={props.brand} title="Brand"></Info>
							<Info valueOfInfo={props.params.region} title="Region"></Info>
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
		);
	};

	return [modal, toggle, ModalComp];
};

export default CustomModal;

const Info = (props) => {
	return (
		<div className={props.className}>
			{props.valueOfInfo && (
				<h2 className="text-left">
					<span className="detail-col">{props.title} : </span>
					{props.valueOfInfo}
				</h2>
			)}
		</div>
	);
};

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

const CustomModal = (props) => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const ModalComp = (props) => {
		console.log(props);
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
						<Col xs="6" md="6">
							<h2>Product Name: {props.name}</h2>
							<h4>
								Product Id: <span>{props.productId}</span>
							</h4>

							<h3 class="text-left">
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
							</h3>
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

	return [toggle, ModalComp];
};

export default CustomModal;
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
		);
	};

	return [toggle, ModalComp];
};

export default CustomModal;

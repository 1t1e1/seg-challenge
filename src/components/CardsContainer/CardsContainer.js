import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row, Container } from "reactstrap";

import CustomCard from "./Card";
import useModal from "./useModal";

export default function CardsContainer() {
	const { isLoading, content } = useSelector((state) => ({
		isLoading: state.homePage.isLoading,
		content: state.homePage.content,
	}));

	const [modalProps, setmodalprops] = useState({});

	const [isModalActive, toggleModal, ModalComp] = useModal();

	const handleModal = (e) => {
		const foundProduct = content.find((product) => product.productId === e);
		setmodalprops(foundProduct);
		toggleModal();
		// FIXME suan calisiyor ama statelerinin iliskisi hakinda dusunmem gerek.
		// useReducer ile iki state i bagli yapmak daha mantikli geliyor.
	};

	if (isLoading) return <div>Loading</div>;

	return (
		<>
			{isModalActive && <ModalComp {...modalProps}></ModalComp>}
			<Container className="mt-3">
				{content.length ? (
					<Row className="row-cols-5">
						{content.map((wine, index) => (
							<Col
								xs={{ size: 10, offset: 1 }}
								sm={{ size: 6, offset: 0 }}
								md={{ size: 4, offset: 0 }}
								lg={{ size: 3, offset: 0 }}
								xl={{ size: 3, offset: 0 }}
								key={wine.productId}
							>
								{/* // xl={{ size: 2, offset: (5 * index + 1) % 5 === 1 ? 0 : 0 }}
								// TODO xl icin 5 column yap. > */}
								<CustomCard {...wine} handleModal={handleModal}></CustomCard>
							</Col>
						))}
					</Row>
				) : (
					<div>
						<p> There is no found data. </p>
					</div>
				)}
			</Container>
		</>
	);
}

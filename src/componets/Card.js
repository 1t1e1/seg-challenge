import React from "react";

export default function Card(prop) {
	return (
		<li key={prop.productId}>
			prince={prop.price} name={prop.name} brand={prop.brand}
		</li>
	);
}

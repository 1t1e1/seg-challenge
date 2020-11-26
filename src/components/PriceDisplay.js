import React from "react";

import "./Card.css";

function PriceDisplay(props) {
	let className = props.className ? props.className : "";
	return (
		<div className={"discount-price " + className}>
			<del>
				<span className="amount">{props.oldPriceText}</span>
			</del>
			<ins>
				<span className="amount">{props.priceText}</span>
			</ins>
		</div>
	);
}

export default PriceDisplay;

import React from "react";

import "./Card.css";

function PriceDisplay(props) {
	return (
		<div class="discount-price">
			<del>
				<span class="amount">{props.oldPriceText}</span>
			</del>
			<ins>
				<span class="amount">{props.priceText}</span>
			</ins>
		</div>
	);
}

export default PriceDisplay;

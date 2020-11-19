import React from "react";

import Card from "./Card";

export default function CardsContainer({ data, isLoading }) {
	if (isLoading) return <div>Loading</div>;

	if (!data.length) {
		return (
			<div>
				<p> data length is zero.</p>
			</div>
		);
	} else {
		return (
			<div>
				<p> data came.</p>
				<ol>
					{data.map((wine, index) => (
						<Card {...wine}></Card>
					))}
				</ol>
			</div>
		);
	}
}

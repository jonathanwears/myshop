import React from "react";
import "../../css/productCard.css";

function ProductCard({ title, image, price }) {

	return (

		<div className="product-card" >
			<div className="product-card-img">

				<img alt={title + " img"} src={image}></img>
			</div>
			<div className="product-card-info">
				<h2>{title}</h2>
				<p>€{price}</p>
			</div>

		</div>
	);
};

export default ProductCard;
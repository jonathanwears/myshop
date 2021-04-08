import React from "react";

function ProductCard({title, image, price}) {

	return (

		<div className="product-card">	
			<div className="product-card-img">
			<img  alt={title + " img"} src={image}></img>
			</div>
			<h2>{title}</h2>
			<p>{price}</p>
		</div>
	)

};

export default ProductCard;
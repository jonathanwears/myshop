import React from "react";
import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/react"

function ProductCard({ title, image, price }) {

	return (

		<div className="product-card" >
			<Flex FlexDirection="row" width="100%">
				<div className="product-card-img">
					<Image boxSize="sm" alt={`${title} img`} src={image}></Image>
				</div>
				<div className="product-card-info">
					<h2>{title}</h2>
					<p>€{price}</p>
				</div>
			</Flex>
		</div>
	);
};

export default ProductCard;
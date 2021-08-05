import React, { useState, useEffect } from "react";
import { getSingleProductData } from "../../utils/index.js";
import { Flex, Center } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/react"
import '../../css/ExpandedProductInfo.css';

function ExpandedProductInfo({ match }) {

	const productId = match.params.productId;
	const [product, setProduct] = useState();

	useEffect(() => {

		async function fetchProduct() {
			const getData = await getSingleProductData(productId);
			setProduct(getData);
		};
		fetchProduct();
	}, [productId]);

	return (
		<div className="expanded-product-info">
			{product && <>
				<img src={product.image} alt={product.title}></img>
				<p>{product.id}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<p>€{product.price}</p>

			</>}
		</div>
	);
};

export default ExpandedProductInfo;
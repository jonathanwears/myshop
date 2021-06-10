import React, { useState, useEffect } from "react";
import { getSingleProductData } from "../../utils/index.js";
import "../../css/ExpandedProductInfo.css";

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
				{product.id}
				{product.title}
				{product.price}
			</>}
		</div>

	);
};

export default ExpandedProductInfo;
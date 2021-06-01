import React, { useState, useEffect } from "react";
import { getSingleProductData } from "../../utils/index.js";

function ExpandedProductInfo({ match }) {

	const productId = match.params.productId
	const [product, setProduct] = useState()
	console.log(productId)
	useEffect(() => {

		async function fetchProduct() {
			const getData = await getSingleProductData(productId);
			setProduct(getData)
		};

		fetchProduct();

	}, [productId]);



	return (
		<div className="expanded-product-info">
			<div>
				{product.id}
				{product.title}
				{/* <img src={product.image} alt={product.title}></img> */}
				{product.price}
			</div>
		</div>
	);
};

export default ExpandedProductInfo;
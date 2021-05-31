import React, { useState, useEffect, useRef } from "react";
import { getSingleProductData } from "../../utils/index.js";

const firstProject = "comes from first product in mapped"

function ExpandedProductInfo({ firstpassedinfo }) {

	const firstMount = useRef(true);

	const [product, setProduct] = useState()
	const [productId, setProductId] = useState(1)


	useEffect(() => {

		async function fetchProduct() {
			const getData = await getSingleProductData(productId);
			setProduct(getData)
		};

		fetchProduct();

	}, [productId]);

	return (
		<div className="expanded-product-info">

			{
				product && (
					<div>
						{product.id}
						{product.title}
						<img src={product.image} alt={product.title}></img>
						{product.price}
					</div>
				)










			}



		</div>

	);

};

export default ExpandedProductInfo;
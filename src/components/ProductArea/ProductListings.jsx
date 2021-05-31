import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProductData } from "../../utils";
import "../../css/ProductListings.css"

function ProductListings() {
	
	const [products, setProducts] = useState([]);

	useEffect(() => {

		async function fetchProduct() {
			const getData = await getProductData();
			setProducts(getData)
		};

		fetchProduct();
	}, []);

	return (
		<div className="product-listings">
			{products && products.map((product, index) => {

				return (
					<>
						<ProductCard key={product.title + index} {...product} />
					</>
				)
			})}
		</div>
	)
};

export default ProductListings;
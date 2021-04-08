import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Products() {

	const [products, setProducts] = useState([])

	// useEffect(() => {

	// 	const productData = async () => {
	// 		const getData = await fetch('https://fakestoreapi.com/products');
	// 		const res = await getData.json();
	// 		const data = await res;
	// 		setProducts(data)

	// 	};

	// 	productData();
	// }, []);

	return (

		<div className="products">
			{/* {products && products.map((product) => {
				return (
					<ProductCard key={product.title} {...product} />
				)
			})} */}
		</div>

	)
};

export default Products;
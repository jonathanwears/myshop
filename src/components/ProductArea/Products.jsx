import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getProductData } from "../../utils";
import ExpandedProductInfo from "./ExpandedProductInfo";
import "../../css/ProductListings.css"
import "../../css/ProductsArea.css";

function Products() {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProduct() {
			const getData = await getProductData();
			setProducts(getData)
		};
		fetchProduct();
	}, []);

	return (
		<div className="products-area">

			<Router>
				<div className="product-listings">
					{products && products.map((product, index) => {
						return (
							<>
								<Link to={`/product/${product.id}`}>
									<ProductCard key={product.id} {...product} />
								</Link>
							</>
						)
					})}

				</div>
				<Route path="/product/:productId" component={ExpandedProductInfo} />

			</Router>
		</div>
	)
};

export default Products;
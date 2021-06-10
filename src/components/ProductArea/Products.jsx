import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getProductData } from "../../utils";
import ExpandedProductInfo from "./ExpandedProductInfo";
import "../../css/ProductListings.css";
import "../../css/ProductsArea.css";
import FilterTickList from "./FilterTickList";


function Products() {

	const [products, setProducts] = useState([]);
	const [filteredCatagories, setFilteredCatagories] = useState("");
	
	useEffect(() => {
		console.log(filteredCatagories)
		async function fetchProduct() {

			const getData = await getProductData(filteredCatagories);
			setProducts(getData)
		};
		fetchProduct();
	}, [filteredCatagories]);

	return (
		<div className="products-area">

			<Router>
				<div className="filter-tick-list">
					<FilterTickList setFilteredCatagories={setFilteredCatagories}/>
				</div>
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
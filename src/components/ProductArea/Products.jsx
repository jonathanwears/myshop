import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getProductData } from "../../utils";
import ExpandedProductInfo from "./ExpandedProductInfo";
import FilterTickList from "./FilterTickList";
import ProductListings from "./ProductListings";
import "../../css/ProductsArea.css";

function Products() {

	const [products, setProducts] = useState([]);
	const [filteredCatagories, setFilteredCatagories] = useState("");
	
	useEffect(() => {
		async function fetchProduct() {
			const getData = await getProductData(filteredCatagories);
			setProducts(getData)
		};
		fetchProduct();
	}, [filteredCatagories]);

	return (
		<div className="products-area">
			<Router>
				<FilterTickList setFilteredCatagories={setFilteredCatagories} />
				<ProductListings products={products} />
				<Route path="/product/:productId" component={ExpandedProductInfo} />
			</Router>
		</div>
	)
};

export default Products;
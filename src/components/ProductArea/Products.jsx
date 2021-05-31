import React from "react";
import ExpandedProductInfo from "./ExpandedProductInfo";
import ProductListings from "./ProductListings";
import "../../css/ProductsArea.css";


// this is now the full two windows

function Products() {

	return (
		<div className="products-area">
			<ProductListings />
			<ExpandedProductInfo />
		</div>
	)
};

export default Products;
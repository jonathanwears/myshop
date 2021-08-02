import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getProductData } from "../../utils";
import ExpandedProductInfo from "./ExpandedProductInfo";
import FilterTickList from "./FilterTickList";
import ProductListings from "./ProductListings";
import { Grid, GridItem } from "@chakra-ui/react";

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
				<Grid h="100vh"
					templateColumns="repeat(5, 1fr)"
					templateRows="repeat(2,1fr)"
					gap={4}
					>
					<GridItem rowSpan={1} colSpan={5}>
						<FilterTickList setFilteredCatagories={setFilteredCatagories} />
					</GridItem>
					<GridItem rowSpan={1} colSpan={2}>
						<ProductListings products={products} />
					</GridItem>
					<GridItem rowSpan={1} colSpan={3}>
						<Route path="/product/:productId" component={ExpandedProductInfo} />
					</GridItem>
				</Grid>
			</Router>
		</div>
	)
};

export default Products;
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Box } from "@chakra-ui/react";

function ProductListings({ products }) {

	return (

		<div className="product-listings">
			{products && products.map((product, index) => {
				return (
					<>
						<Box border="1px">
							<Link to={`/product/${product.id}`}><ProductCard key={product.id} {...product} /></Link>
						</Box>

					</>
				)
			})}

		</div>
	)
};

export default ProductListings;

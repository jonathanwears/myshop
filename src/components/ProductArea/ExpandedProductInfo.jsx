import React, { useState, useEffect } from "react";
import { getSingleProductData } from "../../utils/index.js";
import { Flex, Center } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/react"

function ExpandedProductInfo({ match }) {

	const productId = match.params.productId;
	const [product, setProduct] = useState();

	useEffect(() => {

		async function fetchProduct() {
			const getData = await getSingleProductData(productId);
			setProduct(getData);
		};
		fetchProduct();
	}, [productId]);

	return (
		<div className="expanded-product-info">

			{product && <>
				<Box border="1px" borderStyle="solid">
				<Flex flexDirection="column" size="100%">
					<Center w="100%" h="100%">
						<Image boxSize="md" src={product.image} alt={product.title}></Image>
						
						<p>{product.id}</p>
						<p>{product.title}</p>
						<p>{product.description}</p>
						<p>€{product.price}</p>
						</Center>
					</Flex>	
				</Box>
				
					
			</>}


		</div>
	);
};

export default ExpandedProductInfo;
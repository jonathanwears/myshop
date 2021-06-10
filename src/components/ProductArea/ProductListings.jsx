import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../../css/ProductListings.css";

function ProductListings({ products }) {

	return (

		<div className="product-listings">
			{products && products.map((product, index) => {

				return (
					<>
						<Link to={`/product/${product.id}`}><ProductCard key={product.id} {...product} /></Link>
					</>
				)
			})}

		</div>
	)
};

export default ProductListings;
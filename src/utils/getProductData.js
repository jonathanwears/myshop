
async function productUrl(filter = true) {
	const url = 'https://fakestoreapi.com/products'
	let data = url;

	if (filter) {
		data = url + "/category/" + "electronics";
	}; 

	const getData = await fetch(data);
	const res = await getData.json();
	
	return res;
};

export default productUrl;
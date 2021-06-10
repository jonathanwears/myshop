
async function productUrl(filter) {
	const url = 'https://fakestoreapi.com/products'
	let data = url;

	if (filter) {
		data = url + "/category/" + filter;
	}; 

	const getData = await fetch(data);
	const res = await getData.json();
	
	return res;
};

export default productUrl;
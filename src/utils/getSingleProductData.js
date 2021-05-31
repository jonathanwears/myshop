
async function productUrl(id) {

	const url = 'https://fakestoreapi.com/products/' + id;
	let data = url;
	const getData = await fetch(data);
	const res = await getData.json();
	
	return res;
};

export default productUrl;

async function getCategories() {
	const url = 'https://fakestoreapi.com/products/categories'

	const getData = await fetch(url);
	const res = await getData.json();
	
	return res;
};

export default getCategories;
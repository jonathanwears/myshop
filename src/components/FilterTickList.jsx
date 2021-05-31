import React, { useState } from "react";


function FilterTickList() {

	const filterCatagories = [{ name: "electronics", checked: false }, { name: "jewelery", checked: false }, { name: "men clothing", checked: false }, { name: "women clothing", checked: false }]
	const [catagory, setCatagory] = useState();

	function handleOnClick(event) {
		setCatagory(event.target.value);
	};

	return null
	//(

	// 	<div>

	// 		{
	// 			filterCatagories.map((catagory, index) => {
	// 				return (
	// 					<>
	// 						<input key={catagory.name + index} onClick={handleOnClick} type="radio" value={catagory.name} name="filterCatagories" />
	// 						{catagory.name}
	// 					</>
	// 				)
	// 			})
	// 		}

	// 	<button >Submit</button>

	// </div>
	// )
};

export default FilterTickList;
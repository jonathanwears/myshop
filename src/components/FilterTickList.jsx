import React, { useState } from "react";
import TickComponent from "./TickComponent";

function FilterTickList() {

	const filterCatagories = [{ name: "electronics", checked: false }, { name: "jewelery", checked: false }, { name: "men clothing", checked: false }, { name: "women clothing", checked: false }]
	const [catagories, setCatagories] = useState(filterCatagories);

	function checkCatagory(index) {
		const checkedCatagory = [...catagories]
		checkedCatagory[index].checked = !checkedCatagory[index].checked;
		setCatagories(checkedCatagory);
	};

	return (
		<div>
			<ul>
				{catagories.map((catagory, index) => <TickComponent checkCatagory={checkCatagory} index={index} catagory={catagory} />)}

				<button >Submit</button>
			</ul>
		</div>
	)
};

export default FilterTickList;
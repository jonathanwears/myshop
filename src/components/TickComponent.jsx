import React from "react";

function TickComponent({ catagory, checkCatagory, index }) {

	function handleChange() {
		checkCatagory(index)
	}

	return (

		<li><input type="checkBox" onChange={handleChange} ></input>{catagory.name}</li>

	)
};

export default TickComponent;
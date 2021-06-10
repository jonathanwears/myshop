import React, { useEffect, useState } from "react";
import { getCategories } from "../../utils/index.js";

function FilterTickList({ setFilteredCatagories }) {

	const [categories, setCategories] = useState();

	useEffect(() => {
		async function fetchCategories() {
			const getData = await getCategories();
			setCategories(getData)
		};
		fetchCategories();
	}, []);

	function handleOnChange(event) {
		setFilteredCatagories(event.target.value);
	};

	return (
		<div className="filter-tick-list">
		
			{
				categories &&

				categories.map((catagory, index) => {
					return (
						<>
							<input key={catagory + index} type="radio" value={catagory} name="filterCatagories" onChange={handleOnChange} />
							{catagory}
						</>
					)
				})

			}
			<input key="no-selection" type="radio" value="" name="filterCatagories" onChange={handleOnChange} defaultChecked/>
				none
		</div>
	)
};

export default FilterTickList;
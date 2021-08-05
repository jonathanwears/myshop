import React, { useEffect, useState } from "react";
import { getCategories } from "../../utils/index.js";
import '../../css/FilterTickList.css';

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
			<form>
				{
					categories && categories.map((catagory, index) => {
						return (
							<>
								<input key={catagory + index} type="radio" value={catagory} onChange={handleOnChange}></input>
								<p>{catagory}</p>
							</>
						)
					})
				}
				<input key="no-selection" type="radio" value=""  checked="checked" onChange={handleOnChange}></input><p>none</p>
			</form>
		</div>
	)
};

export default FilterTickList;
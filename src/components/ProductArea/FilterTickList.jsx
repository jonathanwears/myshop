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
									<input key={catagory + index} type="radio" name="catagory" value={catagory} onChange={handleOnChange}></input>
									<label>{catagory}</label>
								</>
							)
						})
					}
					<input key="no-selection" type="radio" name="catagory" value="" checked="checked" onChange={handleOnChange}></input>
					<label>none</label>
			</form>
		</div>
	)
};

export default FilterTickList;
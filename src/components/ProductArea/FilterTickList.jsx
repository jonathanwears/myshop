import React, { useEffect, useState } from "react";
import { getCategories } from "../../utils/index.js";
import { Flex } from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"


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
			<Flex FlexDirection="row" width="100%">
				<RadioGroup name="filterCatagories">
					<Stack direction="row">
						{
							categories && categories.map((catagory, index) => {
								return (
									<>
										<Radio key={catagory + index} value={catagory} onChange={handleOnChange} />
										<p>{catagory}</p>
									</>
								)
							})
						}
						<Radio key="no-selection" value="" onChange={handleOnChange} defaultChecked />
						<p>none</p>
					</Stack>

				</RadioGroup>


			</Flex>
		</div>
	)
};

export default FilterTickList;
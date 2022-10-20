import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const CustomHookExample3 = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [value, setValue] = useState([]);
	const [debouncedValue] = useDebounce(searchTerm, 2000);
	useEffect(() => {
		if (searchTerm)
			setValue(prev => [
				...prev,
				{ searchVal: searchTerm, debounceVal: debouncedValue },
			]);
	}, [searchTerm, debouncedValue]);

	return (
		<>
			<div className="searchContainer">
				<label htmlFor="Search">Search</label>
				<input
					placeholder="Search"
					type="text"
					name="Search"
					id="Search"
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
			</div>
			<hr />
			<ul>
				<li>
					<div>Input Value</div>
					<div>|</div>
					<div>Debounced Value(delay duration 3sec)</div>
				</li>
				{value.map(({ searchVal, debounceVal }, ind) => (
					<li key={ind}>
						<div>{searchVal}</div>
						<div>|</div>
						<div>{debounceVal}</div>
					</li>
				))}
			</ul>
		</>
	);
};
export default CustomHookExample3;

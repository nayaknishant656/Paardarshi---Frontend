import styles from "./styles.module.css";
import { CiSearch } from "react-icons/ci";
import "./search.css"

const Search = ({ setSearch }) => {
	return ( <>
		<input
			className="search_bar"
			placeholder="Search in HINDI **"
			onChange={({ currentTarget: input }) => setSearch(input.value)}
		/><CiSearch className="search_logo" />
	</>
	);
};
export default Search;

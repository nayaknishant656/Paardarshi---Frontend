import styles from "./styles.module.css";


const Search = ({ setSearch }) => {
	return ( <>
		<input
			className={styles.search}
			placeholder="Search in HINDI **"
			onChange={({ currentTarget: input }) => setSearch(input.value)}
		/>
	</>
	);
};
export default Search;

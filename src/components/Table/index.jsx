import styles from "./styles.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import certificate from "../certificate/certificate";

const Table = ({ products }) => {
	let link = "https://nawnitstudio.000webhostapp.com/certificate/index.html";
	function trimToComma(inputString) {
		const commaIndex = inputString.indexOf(',');
		if (commaIndex !== -1) {
			return inputString.substring(0, commaIndex);
		} else {
			return inputString;
		}
	}
	return (
		<>
		 
			{/* <div className={styles.container}>
				<div className={styles.heading}>
					<p className={styles.title_tab}>Title</p>
					<p className={styles.genre_tab}>Price</p>
					<p className={styles.rating_tab}>Rating</p>
				</div>
				{products.map((movie) => (
					<div className={styles.movie} key={movie._id}>
						<div className={styles.title_container}>
							<img src={movie.img} alt="movie" className={styles.movie_img} />
							<p className={styles.movie_title}>
								{movie.name} ({movie.year})
							</p>
						</div>
						<div className={styles.genre_container}>
							<p>{movie.year}</p>
						</div>
						<div className={styles.genre_container}>
							<p>{movie.rating}</p>
						</div>
					</div>
				))}
			</div> */}
			<main className='main-body'>
				<table>
					<thead>
						<tr>
							<th>SN</th>
							<th>Name</th>
							<th>Amount</th>
							<th>Adress</th>
							<th>Year</th>
							<th>Certificate-Link**</th>
						</tr>
					</thead>
					<tbody>
                {products.map(user => (
                    <tr key={user._id}>
                        <td>{user.si}</td>
                        <td>{trimToComma(user.name)}</td>
                        <td>{user.amount}/-</td>
                        <td>{user.adress}</td>
                        <td>{user.year}</td>
						<td><a href="/"></a> <Link to="/jamin/" >Linkk</Link></td>
                    </tr>
                ))}
            </tbody>	
				</table>
			</main>
		</>
	);
};

export default Table;

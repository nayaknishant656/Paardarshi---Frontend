import React, { useEffect, useState } from "react";
import Table from "../Table/index";
import Sort from "../Sort/index";
import Pagination from "../Pagination/index";
import Search from "../Search/index";
import axios from "axios";
import "./body.css";

export default function Body() {
    // const [users, setUsers] = useState([]);
    const [obj, setObj] = useState({});
    const [sort, setSort] = useState({ sort: "rating", order: "desc" });
    // const [filterGenre, setFilterGenre] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
const base_url = 'https://backend-chi-woad.vercel.app/shoes';
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const url2 = 'http://localhost:4000/shoes';
                const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&search=${search}`;
                const { data } = await axios.get(url);
                setObj(data);
              console.log(obj);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [sort,page, search]);
    return (
        <>  <center><h3>Payers Details :-</h3></center>
            <main className='main-body'>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Certificate Link</th>
                            <th>Person Admitted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {obj.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.year}</td>
                                 <td>Date{new Date().toLocaleDateString()}</td>
                                 <td>{user.Clink}</td>
                                 <td>{user.padmitted}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </main>









            <div className="wrapper">
			<div className="container">
				<div className="head">
					<img src="./images/logo.png" alt="logo" className="logo" />
					<Search setSearch={(search) => setSearch(search)} />
				</div>
				<div className="body">
					<div className="table_container">
                    <Table products={obj.products ? obj.products : []} />
						<Pagination
							page={page}
							limit={obj.limit ? obj.limit : 0}
							total={obj.total ? obj.total : 0}
							setPage={(page) => setPage(page)}
						/>
					</div>
					<div className="filter_container">
						<Sort sort={sort} setSort={(sort) => setSort(sort)} />
						{/* <Genre
							filterGenre={filterGenre}
							genres={obj.genres ? obj.genres : []}
							setFilterGenre={(genre) => setFilterGenre(genre)}
						/> */}
					</div>
				</div>
			</div>
		</div>














        </>
    );
}

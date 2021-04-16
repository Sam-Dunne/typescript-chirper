import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IChirp } from './Home';


/* HOOK REACT EXAMPLE */
const Details = (props: DetailsProps) => {
	const { id } = useParams<{ id: string }>();
	const [chirp, setChirp] = useState<IChirp>(null);

	useEffect(() => {
		fetch(`/api/chirps/${id}`)
			.then(res => res.json())
			.then(chirp => setChirp(chirp))
	}, [id])


	return (
		<section>
			<div className="card">
				<div className="card-body">
					{/* {chirp?foo} is optional chain operator */}
					<h4 className="card-title">{chirp?.name}</h4>
					<h6 className="card-title">{chirp?.msg}</h6>
					<div className="container ">
						<div className="row justify-content-between align-items-center">
							<Link to={`/edit/${id}`}
								className="btn btn-link bg-secondary rounded my-2 mx-auto p-2">
								To Edit
							</Link>
							<Link to={`/`}
								className="btn btn-link bg-secondary rounded my-2 mx-auto p-2">
								Back to Home
							</Link>
						</div></div>
				</div>
			</div>

		</section>

	);
};

interface DetailsProps { }



export default Details;
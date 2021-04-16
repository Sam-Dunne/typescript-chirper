import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';



const Details = (props: DetailsProps) => {
	const history = useHistory();

	const { id } = useParams<{ id: string }>();

	// control state of name input
	const [userName, setUserName] = useState('');
	const handleSetUserName = (e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)
	// controls state of chirp msg input
	const [newChirp, setNewChirp] = useState('');
	const handleSetNewChirp = (e: React.ChangeEvent<HTMLInputElement>) => setNewChirp(e.target.value)

	useEffect(() => {
		fetch(`/api/chirps/${id}`)
			.then(res => res.json())
			.then(chirp => {
				setUserName(chirp.name);
				setNewChirp(chirp.msg);
			})
	}, [])

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		// console.log({ resMessage: `deleted chirp id: ${id}` })  //check against postman res
		fetch(`/api/chirps/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ resMessage: `deleted chirp id: ${id}` })
		})
			.then(res => res.json())
			.then(serverRes => {
				console.log(serverRes);
				history.push('/');
			});
	};

	const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log({
			name: userName,
			msg: newChirp
		});
		fetch(`/api/chirps/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: userName, msg: newChirp })
		})
			.then(res => res.json())
			.then(serverRes => {
				console.log(serverRes);
				history.push('/');
			})
	}

	return (

		<section>

			<section>
				<form
					id="chirp-form"
					className="bg-info justify-content-center m-3 p-3">
					<div className="mb-3">
						<input
							className="form-control mb-2"
							aria-describedby="emailHelp"
							placeholder="UserName"
							value={userName}
							onChange={handleSetUserName}
						/>
					</div>
					<div className="mb-3">
						<input
							type="text"
							className="form-control mb-2"
							id="chirp-msg-input"
							placeholder="What's good yo?!?"
							value={newChirp}
							onChange={handleSetNewChirp}
						/>
					</div>

					<div className="container ">
						<div className="row justify-content-around align-items-center">
							<button
								onClick={handleEdit}
								type="submit"
								className="btn btn-warning mb-2 mr-2">
								Submit Edit
                   		 	</button>
							<button
								onClick={handleDelete}
								type="submit"
								className="btn btn-danger mb-2 mr-2">
								Delete Chirp
                    		</button>
						</div>
						<div className="row justify-content-center align-items-center">
							<Link to="/" className="bg-light rounded my-2 mx-auto p-2">
								Home
                    		</Link>
						</div>
					</div>
				</form>
			</section>

		</section>

	);
};

interface DetailsProps { }



export default Details;
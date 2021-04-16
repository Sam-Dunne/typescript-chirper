import * as React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


const MakeChirp = (props: MakeChirpProps) => {
    const history = useHistory();
    // control state of name input
    const [userName, setUserName] = useState('');
    const handleSetUserName = (e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)
    // controls state of chirp msg input
    const [newChirp, setNewChirp] = useState('');
    const handleSetNewChirp = (e: React.ChangeEvent<HTMLInputElement>) => setNewChirp(e.target.value)

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // ***use log to verify structure by comparing with Postman***
        // console.log({
        //     name: userName,
        //     msg: newChirp
        // });
        fetch(`/api/chirps/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: userName, msg: newChirp })
        })
            .then(res => res.json())
            .then(serverRes => {
                console.log(serverRes);
                history.push('/');  // loads HOME view
            });
    };


    return (

        <section>
            <form
                id="chirp-form"
                className="bg-info shadow rounded m-5 p-5">
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
                        id="exampleInputPassword1"
                        placeholder="What's good yo?!?"
                        value={newChirp}
                        onChange={handleSetNewChirp}
                    />
                </div>
                <div className="container ">
                    <div className="row justify-content-between align-items-center">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="btn btn-secondary">
                            Chirpr It
                        </button>
                        <Link to="/" className="btn btn-link bg-light rounded ">
                            Back Home
                        </Link>

                    </div>
                </div>
            </form>
        </section>
    );
};

interface MakeChirpProps { }



export default MakeChirp;
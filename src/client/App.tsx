import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './views/Details';
import Edit from './views/Edit';
import Home from './views/Home';
import MakeChirp from './views/MakeChirp';


/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<Navbar />
			<main className="container bg-secondary col-md-8 col-lg-6 shadow rounded p-2 my-5">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/edit/:id">
						<Edit />
					</Route>
					<Route exact path="/details/:id">
						<Details />
					</Route>
					<Route exact path="/add">
						<MakeChirp />
					</Route>
				</Switch>
			</main>
		</BrowserRouter>
	)
};

interface AppProps { }

export default App;

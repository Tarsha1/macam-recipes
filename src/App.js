import React from 'react';
import Cocktails from './Components/Cocktails';
import { Route } from 'react-router-dom';
import CocktailDetails from './Components/CocktailDetails';

function App() {
	return (
		<>
			<header>
				<h2>MaCAM</h2>
				<h1>
					<a href='/'>Cocktail Recipes</a>
				</h1>
			</header>
			<main>
				<Route path='/' exact component={Cocktails} />
				<Route
					path='/details/:id'
					render={(routerProps) => (
						<CocktailDetails match={routerProps.match} />
					)}
				/>
			</main>
		</>
	);
}
export default App;

import React from 'react';
import Cocktails from './Components/Cocktails';
import { Route } from 'react-router-dom';
import CocktailDetails from './Components/CocktailDetails';

function App() {
	return(
	 	<>
			<header>
				<h1>
					<a href='/'>Cocktail Recipes</a>
				</h1>
			</header>
			<main>
				<Route path='/' component={Cocktails} />
				<Route
					path='/details/:strDrinkThumb'
					render={(routerProps) => <CocktailDetails match={routerProps.match} />}
				/>
			</main>
		</>
	)
}
export default App;

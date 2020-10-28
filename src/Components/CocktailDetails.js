import React, { useState, useEffect } from 'react';

const CocktailDetails = ({ match }) => {
	const [cocktail, setCocktail] = useState(null);
	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				setCocktail(resJson.drinks[0]);
			})
			.catch(console.error);
	}, [url]);
	if (!cocktail) {
		return null;
	}
	return (
		<div className='details-container'>
			<img src={cocktail.strDrinkThumb} alt='' />
			<div className='details'></div>
			<h2>{cocktail.strDrink}</h2>
			<h3>Instructions</h3>
			<p>{cocktail.strInstructions}</p>
		</div>
	);
};

export default CocktailDetails;

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
			<h4 className='ingredient'>Ingredients:</h4>

			<ul>
				<li>
					{cocktail.strIngredient1} -{cocktail.strMeasure1}
				</li>
				<li>
					{cocktail.strIngredient2} - {cocktail.strMeasure2}
				</li>
				<li>
					{cocktail.strIngredient3} - {cocktail.strMeasure3}
				</li>
				<li>
					{cocktail.strIngredient4} - {cocktail.strMeasure4}
				</li>
				<li>
					{cocktail.strIngredient5} - {cocktail.strMeasure5}
				</li>
				<li>
					{cocktail.strIngredient6} - {cocktail.strMeasure6}
				</li>
				<li>
					{cocktail.strIngredient7} - {cocktail.strMeasure7}
				</li>
				<li>
					{cocktail.strIngredient8} - {cocktail.strMeasure8}
				</li>
				<li>
					{cocktail.strIngredient9} - {cocktail.strMeasure9}
				</li>
				<li>
					{cocktail.strIngredient10} - {cocktail.strMeasure10}
				</li>
				<li>
					{cocktail.strIngredient11} - {cocktail.strMeasure11}
				</li>
				<li>
					{cocktail.strIngredient12} - {cocktail.strMeasure12}
				</li>
				<li>
					{cocktail.strIngredient13} - {cocktail.strMeasure13}
				</li>
				<li>
					{cocktail.strIngredient14} - {cocktail.strMeasure14}
				</li>
				<li>
					{cocktail.strIngredient15} - {cocktail.strMeasure15}
				</li>
			</ul>
			<h3 className='instruction'>Instructions:</h3>
			<p>{cocktail.strInstructions}</p>
		</div>
	);
};

export default CocktailDetails;

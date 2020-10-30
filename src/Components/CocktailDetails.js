import React, { useState, useEffect } from 'react';

const CocktailDetails = ({ match }) => {
	const [cocktail, setCocktail] = useState(null);
	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				const ingredientArray = [];
				for (let index = 1; index <= 15; index++) {
					const element = {
						ingredient: resJson.drinks[0]['strIngredient' + index],
						measure: resJson.drinks[0]['strMeasure' + index],
					};
					if (element.ingredient) {
						ingredientArray.push(element);
					}
				}
				setCocktail({ ...resJson.drinks[0], ingredients: ingredientArray });
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
				{cocktail.ingredients.map((ingredient) => (
					<li>
						{ingredient.measure}-{ingredient.ingredient}
					</li>
				))}
			</ul>
			<h3 className='instruction'>Instructions:</h3>
			<p>{cocktail.strInstructions}</p>
		</div>
	);
};

export default CocktailDetails;

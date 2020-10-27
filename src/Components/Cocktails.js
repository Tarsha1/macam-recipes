import React, { useState, useEffect } from 'react';

const Cocktails = () => {
	const [cocktails, setCocktails] = useState([]);
	const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				setCocktails(resJson.drinks);
			})
			.catch(console.error);
	}, []);
	return (
		<div>
			{cocktails.map((cocktail) => (
				<div>{cocktail.strDrink}</div>
			))}
		</div>
	);
};

export default Cocktails;

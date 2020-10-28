import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CocktailDetails from './Components/CocktailDetails';

const Cocktails = () => {
	const [cocktails, setCocktails] = useState([]);
	const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				setCocktails(resJson.strDrink);
			})
			.catch(console.error);
	}, []);
	return (
		<section classname='container'>
			{cocktails.map((cocktail) => (
				<Link
					to={`/details/${cocktail.strDrinkThumb}`}
					key={cocktail.strDrinkThumb}>
					<div className='card'>
						<div>{cocktail.strDrink}</div>
						<div className='card-image'>
							<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
						</div>
						<div className='card-title'></div>
						<h3>{cocktail.strDrink}</h3>
					</div>
				</Link>
			))}
		</section>
	);
};

export default Cocktails;

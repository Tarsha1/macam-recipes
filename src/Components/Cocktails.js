import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cocktails = () => {
	const [cocktails, setCocktails] = useState([]);
	const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=rum`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
				console.log(resJson.drinks);
				setCocktails(resJson.drinks);
			})
			.catch(console.error);
	}, []);
	return (
		<section className='container'>
			{cocktails.map((cocktail) => {
				return (
					<Link to={`/details/${cocktail.idDrink}`} key={cocktail.idDrink}>
						<div className='card'>
							<h3>{cocktail.strDrink}</h3>
							<div className='card-image'>
								<img
									src={cocktail.strDrinkThumb}
									alt={cocktail.strDrink}
									align='center'
								/>
							</div>
							<div className='card-title'></div>
						</div>
					</Link>
				);
			})}
		</section>
	);
};

export default Cocktails;

import React, { useState, UseEffect } from 'react';

const CocktailDetails = ({ match }) => {
 	const [cocktail, setCocktail] = useState(null);
 	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007${match.params.strDrinkThumb}`;
	useEffect(() => {
 		fetch(url)
			.then((res) => res.json())
			.then((resJson) => {
 				setCocktail(resJson.strDrink);
             });
              .catch(console.error);
            
//     }, [url]);
//     if (!cocktail) {
//         return null
//     }
//     return (
//         <div className='details-container'>
//             <img src={cocktail.strDrinkThumb} alt=''/>
//             <div className='details'>
//             </div>
//     <h2>{cocktail.strDrink}</h2>
//     <h3>(Cocktails)</h3>
//     <a href={cocktail.homepage} target='_blank' rel='noopener no referrer'>
//         Read More
//     </a>
//         </div>

//     );
// };

export default CocktailDetails;
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
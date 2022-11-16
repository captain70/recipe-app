import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Vegan = () => {
	const [veganRecipes, setVeganRecipes] = useState([]);

	useEffect(() => {
		getVeganRecipes();
	}, []);

	// function for retrieving data
	const getVeganRecipes = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegan`
		);
		const recipeData = await api.json();

		setVeganRecipes(recipeData.recipes);
	};

	return (
		<div className='mx-10'>
			<h3 className='p-2 font-extrabold text-3xl text-slate-700'>
				Vegan Recipes
			</h3>

			<div className='grid grid-cols-3 gap-8 content-around py-4'>
				{veganRecipes.map((recipe) => {
					return (
						<div className='flex justify-around' key={recipe.id}>
							<Link to={'/recipe/' + recipe.id}>
								<div className='space-y-2'>
									<p className='text-center text-slate-700'>{`${recipe.title.slice(
										0,
										40
									)}`}</p>

									<img
										className=' rounded-xl object-cover w-full'
										src={recipe.image}
										alt={recipe.title}
									/>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Vegan;

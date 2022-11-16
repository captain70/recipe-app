import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Popular = () => {
	const [popularRecipes, setPopularRecipes] = useState([]);

	useEffect(() => {
		getPopularRecipes();
	}, []);

	// function for retrieving data
	const getPopularRecipes = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`
		);
		const recipeData = await api.json();
		setPopularRecipes(recipeData.recipes);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className='mx-10'
		>
			<h2 className='p-2 font-extrabold text-3xl text-slate-700'>
				Random Recipes
			</h2>

			<div className='grid grid-cols-3 gap-8 content-around py-4'>
				{popularRecipes.map((recipe) => {
					return (
						<div className='flex justify-around' key={recipe.id}>
							<Link to={'/recipe/' + recipe.id}>
								<div className='space-y-2'>
									<p className='text-center text-slate-700'>
										{`${recipe.title.slice(0, 40)}`}
									</p>

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
		</motion.div>
	);
};

export default Popular;

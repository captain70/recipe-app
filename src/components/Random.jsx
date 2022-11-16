import { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Random = () => {
	const [randomRecipes, setRandomRecipes] = useState([]);

	useEffect(() => {
		getRandomRecipes();
	}, []);

	// function for retrieving data
	const getRandomRecipes = async () => {
		const apiData = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=30`
		);
		const recipeData = await apiData.json();

		setRandomRecipes(recipeData.recipes);
		console.log(recipeData.recipes);
	};

	return (
		<div className='mt-12 mb-5'>
			<h3 className='font-bold text-2xl pb-6 pl-12 mt-6 text-slate-700'>
				Popular Recipes
			</h3>

			<Splide
				options={{
					perPage: 3,
					pagination: false,
					arrows: true,
					drag: 'free',
					gap: '1rem',
					speed: 1000,
				}}
			>
				{randomRecipes.map((recipe) => {
					return (
						<SplideSlide key={recipe.id}>
							<div className=' flex justify-between px-16 py-4'>
								<Link to={'/recipe/' + recipe.id}>
									<div className='space-y-2 w-full'>
										<img
											className='rounded-xl object-cover h-60 w-full'
											src={recipe.image}
											alt={recipe.title}
										/>
										{/* <div className='text-center text-md rounded-xl cursor-pointer p-2 h-40 max-w-xs bg-[#d6f2de] text-gray-900 '>
										 	<h2 className='px-2 mx-2 font-bold hover:text-[#047b26]'>
												{recipe.title}
										 	</h2>
										<h2 className='pt-2 font-thin'>
										 		Health Score: {recipe.healthScore}
										 	</h2>
										 	<h2 className='pt-2 font-thin'>
										 		Diets: {recipe.diets[0]}
										 	</h2>
										 </div> */}
									</div>
								</Link>
							</div>
						</SplideSlide>
					);
				})}
			</Splide>
		</div>
	);
};

export default Random;

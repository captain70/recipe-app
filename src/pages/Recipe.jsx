/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
	const [recipeInfo, setRecipeInfo] = useState({});
	const [activeButton, setActiveButton] = useState('instructions');
	const params = useParams();

	useEffect(() => {
		getRecipeDetails();
	}, [params.id]);

	const getRecipeDetails = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
		);
		const recipeData = await api.json();
		setRecipeInfo(recipeData);
		console.log(recipeData);
	};

	return (
		<div className='flex space-x-10 p-12'>
			<div className='w-1/3'>
				<img
					className='rounded-xl'
					src={recipeInfo.image}
					alt={recipeInfo.title}
				/>
				<h2 className='pt-6'>{recipeInfo.title}</h2>
			</div>
			<div className='bg-gray-200 text-center rounded-xl w-2/3'>
				<button
					onClick={() => setActiveButton('information')}
					className={activeButton === 'information' ? 'current' : 'btn'}
				>
					Information
				</button>
				<button
					onClick={() => setActiveButton('ingredients')}
					className={activeButton === 'ingredients' ? 'current' : 'btn'}
				>
					Ingredients
				</button>
				<button
					onClick={() => setActiveButton('instructions')}
					className={activeButton === 'instructions' ? 'current' : 'btn'}
				>
					Instructions
				</button>
				{activeButton === 'information' && (
					<div className=' text-slate-600'>
						<h3
							className=' pt-3 pb-8 px-12 text-left tracking-wider leading-loose'
							dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}
						></h3>
					</div>
				)}
				{activeButton === 'ingredients' && (
					<ul className='pb-8 pt-3 px-8'>
						{recipeInfo.extendedIngredients.map((ingredient) => (
							<li
								className='pb-4 px-8 text-left  text-slate-600 racking-wider leading-loose tracking-wider'
								key={ingredient.id}
							>
								{ingredient.original}
							</li>
						))}
					</ul>
				)}
				{activeButton === 'instructions' && (
					<div className='text-slate-600'>
						<h3
							className='pt-3 pb-8 px-12 text-left tracking-wider leading-10'
							dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
						></h3>
					</div>
				)}
			</div>
		</div>
	);
};

export default Recipe;

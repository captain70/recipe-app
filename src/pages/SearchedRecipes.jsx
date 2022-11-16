import { React, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SearchedRecipes = () => {
	const [searched, setSearched] = useState([]);
	let params = useParams();

	useEffect(() => {
		getSearched(params.name);
	}, [params.name]);

	const getSearched = async (name) => {
		const apiData = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${name}`
		);
		const searchedRecipe = await apiData.json();
		setSearched(searchedRecipe.results);
	};
	return (
		<div>
			<h2 className=' p-4 mx-8 font-extrabold text-3xl text-slate-700'>
				{params.name}
			</h2>
			<div className='grid grid-cols-3 gap-8 content-around py-4'>
				{searched.map((recipe) => {
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

export default SearchedRecipes;

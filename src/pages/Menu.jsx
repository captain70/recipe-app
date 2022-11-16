import { React, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Menu = () => {
	const [menutype, setMenuType] = useState([]);
	let params = useParams();

	useEffect(() => {
		getMenu(params.type);
	}, [params.type]);

	const getMenu = async (type) => {
		const apiData = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&type=${type}`
		);
		const recipeData = await apiData.json();
		setMenuType(recipeData.results);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<h2 className='p-4 mx-8 font-extrabold text-3xl text-slate-700'>
				{params.type}
			</h2>
			<div className=' grid grid-cols-3 gap-8 content-around py-4'>
				{menutype.map((menu) => {
					return (
						<div className='flex justify-around' key={menu.id}>
							<Link to={'/recipe/' + menu.id}>
								<div className='space-y-2'>
									<p className='text-center text-slate-700'>
										{`${menu.title.slice(0, 40)}`}
									</p>

									<img
										className=' rounded-xl object-cover w-full'
										src={menu.image}
										alt={menu.title}
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

export default Menu;

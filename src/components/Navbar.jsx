import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/cropped-logo.png';
import {
	AiFillTwitterCircle,
	AiFillInstagram,
	AiFillYoutube,
} from 'react-icons/ai';

const Navbar = () => {
	return (
		<nav className='px-2 flex justify-between items-center w-full h-20'>
			<Link to={'/'}>
				<img className='w-60 mb-10 mt-10 ml-10' src={logo} alt='' />
			</Link>
			<ul className='flex space-x-8'>
				<Link to={'/'}>
					<li className='p-4 text-lime-600 hover:text-lime-700 text-xl font-bold'>
						Home
					</li>
				</Link>
				<Link to={'/popular'}>
					<li className='p-4 text-lime-600 hover:text-lime-700 text-xl font-bold'>
						Recipes
					</li>
				</Link>
				<Link to={'/'}>
					<li className='p-4 text-lime-600 hover:text-lime-700 text-xl font-bold'>
						About
					</li>
				</Link>
			</ul>

			<div className='flex space-x-6 mr-10'>
				<a
					href='https://www.instagram.com/'
					className='p-3 text-3xl text-orange-400 hover:text-orange-600'
				>
					<AiFillInstagram />
				</a>
				<a
					href='https://twitter.com/'
					className='p-3 text-3xl text-blue-400 hover:text-blue-600'
				>
					<AiFillTwitterCircle />
				</a>
				<a
					href='https://www.youtube.com/'
					className='p-3 text-3xl text-red-600 hover:text-red-800'
				>
					<AiFillYoutube />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;

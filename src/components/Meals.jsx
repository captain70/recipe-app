import { GiHotMeal, GiCakeSlice, GiCabbage, GiAsparagus } from 'react-icons/gi';
import { TbSoup } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const Meals = () => {
	return (
		<div className='flex justify-center mx-10 my-4 cursor-pointer space-x-3 '>
			<NavLink
				to={'/menu/Appetizer'}
				className=' flex flex-col justify-center items-center rounded-full w-24 h-24 scale-75 bg-gradient-to-r from-lime-400 to-teal-400 focus:from-red-400 to bg-amber-400'
			>
				<TbSoup className='text-2xl text-gray-900' />
				<h4>Appetizer</h4>
			</NavLink>
			<NavLink
				to={'/menu/Main Course'}
				className=' flex flex-col justify-center items-center rounded-full w-24 h-24 scale-75 bg-gradient-to-r from-lime-400 to-teal-400 focus:from-red-400 to bg-amber-400'
			>
				<GiHotMeal className='text-2xl text-gray-900' />
				<h4>Main Dish</h4>
			</NavLink>
			<NavLink
				to={'/menu/Side Dish'}
				className=' flex flex-col justify-center items-center rounded-full w-24 h-24 scale-75 bg-gradient-to-r from-lime-400 to-teal-400 focus:from-red-400 to bg-amber-400'
			>
				<GiAsparagus className='text-2xl text-gray-900' />
				<h4>Side Dish</h4>
			</NavLink>
			<NavLink
				to={'/menu/Salads'}
				className=' flex flex-col justify-center items-center rounded-full w-24 h-24 scale-75 bg-gradient-to-r from-lime-400 to-teal-400 focus:from-red-400 to bg-amber-400'
			>
				<GiCabbage className='text-2xl text-gray-900' />
				<h4>Salad</h4>
			</NavLink>
			<NavLink
				to={'/menu/Desserts'}
				className=' flex flex-col justify-center items-center rounded-full w-24 h-24 scale-75 bg-gradient-to-r from-lime-400 to-teal-400 focus:from-red-400 to bg-amber-400'
			>
				<GiCakeSlice className='text-2xl text-gray-900' />
				<h4>Dessert</h4>
			</NavLink>
		</div>
	);
};

export default Meals;

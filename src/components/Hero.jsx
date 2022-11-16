import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import recipeImage from '../img/recipeImage.jpg';

const Hero = () => {
	const backgroundImageStyle = {
		backgroundImage: `url('${recipeImage}')`,
		backgroundSize: 'cover',
	};

	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate('/searched/' + input);
	};
	const buttonHandler = () => {
		navigate('/vegan/');
	};
	return (
		<div>
			<div className='h-[32rem] pt-6' style={backgroundImageStyle}>
				<form
					onSubmit={submitHandler}
					className='flex justify-center space-x-2 py-10  w-full'
				>
					<input
						onChange={(e) => setInput(e.target.value)}
						type='text'
						className='px-10 rounded-xl focus:outline-none w-2/5 h-10 bg-[#d6f2de]'
						placeholder='search recipe'
						value={input}
					/>

					<button className='px-6 py-2 text-black rounded-full focus:outline-none bg-gradient-to-r from-lime-400 to-teal-400 hover:from-red-400 to bg-amber-400'>
						Search
					</button>
				</form>
				<button
					onClick={buttonHandler}
					className=' ml-32 mt-48 px-8 py-2 text-black rounded-bl-md 
    rounded-tr-md bg-gradient-to-r from-lime-400 to-teal-400 hover:from-red-400 to bg-amber-400'
				>
					Vegan
				</button>
			</div>
		</div>
	);
};

export default Hero;

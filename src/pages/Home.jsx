import { motion } from 'framer-motion';
import React from 'react';
import Hero from '../components/Hero';
import Random from '../components/Random';
import Meals from '../components/Meals';

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Hero />
			<Meals />
			<Random />
		</motion.div>
	);
};

export default Home;

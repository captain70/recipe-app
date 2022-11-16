import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import SearchedRecipes from './SearchedRecipes';
import Vegan from '../components/Vegan';
import Popular from '../components/Popular';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/vegan' element={<Vegan />} />
				<Route path='/popular' element={<Popular />} />
				<Route path='/menu/:type' element={<Menu />} />
				<Route path='/searched/:name' element={<SearchedRecipes />} />
				<Route path='/recipe/:id' element={<Recipe />} />
			</Routes>
		</AnimatePresence>
	);
};

export default Pages;

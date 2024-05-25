/** @format */

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, login } from '../redux/authReducer';
import { Spin } from 'antd';

const Router = () => {
	const [isLoading, setIsLoading] = useState(true);

	const auth = useSelector(authSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(login({}));
		setIsLoading(false);
	}, []);

	return isLoading ? (
		<Spin />
	) : auth.accesstoken ? (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
			</Routes>
		</BrowserRouter>
	) : (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

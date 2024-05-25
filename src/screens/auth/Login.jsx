/** @format */

import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authReducer';

const Login = () => {
	const dispatch = useDispatch();

	const handleLogin = () => {
		const data = {
			_id: 'mindX',
			email: 'MindX@gmail.com',
			accesstoken: 'accesstoken',
		};
		localStorage.setItem('user', JSON.stringify(data));
		dispatch(login());
	};

	return (
		<div>
			<Button onClick={handleLogin}>Login</Button>
		</div>
	);
};

export default Login;

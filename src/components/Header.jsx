/** @format */

import { Badge, Button, Card, Dropdown, List, Space } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSelector } from '../redux/authReducer';
import { cartSelector, removeItem } from '../redux/cartReducer';

const Header = () => {
	const auth = useSelector(authSelector);
	const cart = useSelector(cartSelector);
	const dispatch = useDispatch();

	return (
		<div className='bg-light'>
			<div className='row p-2'>
				<div className='col'></div>
				<div className='col'>
					<Space>
						<Dropdown
							dropdownRender={() => (
								<Card style={{ width: 320 }}>
									<List
										dataSource={cart}
										renderItem={(item) => (
											<List.Item
												key={item.id}
												extra={
													<Button
														danger
														type='text'
														onClick={() => dispatch(removeItem(item.id))}>
														Remove
													</Button>
												}>
												<List.Item.Meta
													title={item.title}
													description={`Quality: ${item.qty}`}
												/>
											</List.Item>
										)}
									/>

									<h4>
										Total: {cart.reduce((a, b) => a + b.price * b.qty, 0)}
									</h4>
								</Card>
							)}>
							<Badge count={cart.length}>Shop</Badge>
						</Dropdown>
						<div className='' style={{ width: 16 }}></div>
						<Link to={'/'}>{auth.email}</Link>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default Header;

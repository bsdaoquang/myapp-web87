/** @format */

import { Button, Card, List } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { products } from '../data/products';
import { authSelector } from '../redux/authReducer';
import { settingSelector } from '../redux/settingsReducer';
import { addToCart } from '../redux/cartReducer';

const HomeScreen = () => {
	const auth = useSelector(authSelector);
	const settings = useSelector(settingSelector);
	const dispatch = useDispatch();

	return (
		<div>
			<Header />

			<div className='container mt-4'>
				<List
					dataSource={products}
					grid={{ gutter: 16 }}
					pagination={{ position: 'bottom', align: 'center' }}
					renderItem={(item) => (
						<List.Item key={item.id}>
							<Card
								hoverable
								cover={
									<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8m1thzKScNeAS3V9uBfK9rAVRjB1X7dx-zTQSX4mvw&s' />
								}
								style={{ width: 220 }}>
								<Meta title={item.title} description={item.description} />
								<Button
									type='primary'
									style={{ width: '100%', marginTop: 12 }}
									onClick={() => dispatch(addToCart(item))}>
									Add to cart
								</Button>
							</Card>
						</List.Item>
					)}
				/>
			</div>
		</div>
	);
};

export default HomeScreen;

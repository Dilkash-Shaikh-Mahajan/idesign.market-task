import React from 'react';
import { useSelector } from 'react-redux';
const Card = () => {
	const { data } = useSelector((state) => state.formData);
	console.log(data);
	return (
		<div>
			<h1>Full Name : {data.fullName}</h1>
			<h1>Email : {data.email}</h1>
			<h1>Mobile : {data.mobile}</h1>
			<h1>Password : {data.password}</h1>
		</div>
	);
};

export default Card;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getData } from './../slices/dataSlices';
const AddTutorial = () => {
	const history = useHistory();
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const dispatch = useDispatch();
	const handleSumbit = () => {
		if (!fullName || !email || !password || !mobile) {
			return setErrorMsg('All fields are required');
		} else {
			dispatch(getData({ fullName, email, mobile, password }));
			setErrorMsg('');
			history.push('/card');
		}
	};
	return (
		<div className='submit-form'>
			<div style={{ color: 'red', fontSize: '20px' }}>
				{errorMsg && errorMsg}
			</div>
			<div>
				<div className='form-group'>
					<label htmlFor='fullName'>Full Name</label>
					<input
						type='text'
						className='form-control'
						id='fullName'
						required
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						name='fullName'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='description'>Email</label>
					<input
						type='text'
						className='form-control'
						id='description'
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						name='description'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='mobile'>Mobile Number</label>
					<input
						type='text'
						className='form-control'
						id='mobile'
						required
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
						name='mobile'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						className='form-control'
						id='password'
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						name='password'
					/>
				</div>

				<button onClick={handleSumbit} className='btn btn-success'>
					Submit
				</button>
			</div>
		</div>
	);
};

export default AddTutorial;

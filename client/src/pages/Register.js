import React, { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: false,
	showAlert: false,
};

const Register = () => {
	const [values, setValues] = useState(initialState);

	const handleChange = e => {
		console.log(e.target);
	};

	const onSubmit = e => {
		e.preventDefault();
		console.log(e.target, values);
	};

	return (
		<Wrapper className='full-page'>
			<form className='form' onSubmit={onSubmit}>
				<Logo />
				{values.showAlert && <Alert />}
				<h3>Login</h3>
				<FormRow
					type='name'
					name='name'
					labelText='name'
					value={values.name}
					handleChange={handleChange}
				/>
				<FormRow
					type='email'
					name='email'
					labelText='email'
					value={values.email}
					handleChange={handleChange}
				/>
				<FormRow
					type='password'
					name='password'
					labelText='password'
					value={values.password}
					handleChange={handleChange}
				/>
				<button type='submit' className='btn btn-block'>
					submit
				</button>
			</form>
		</Wrapper>
	);
};

export default Register;

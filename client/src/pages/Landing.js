import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						I'm baby irony beard kombucha, squid cornhole lumbersexual pug
						chambray single-origin coffee direct trade tumblr blue bottle. Cloud
						bread godard disrupt, ugh scenester quinoa post-ironic cred pickled.
						Fingerstache tote bag pour-over vinyl normcore taiyaki vape salvia
						ramps live-edge.{' '}
					</p>
					<Link to='/register' className='btn btn-hero'>Login / Register</Link>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;

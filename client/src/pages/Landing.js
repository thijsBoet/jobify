import React from 'react';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';

const Landing = () => {
	return (
		<main>
			<nav>
				<img src={logo} alt='jobify logo' className='logo' />
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
					<button className='btn btn-hero'>
						Login / Register
					</button>
				</div>
				<img src={main} alt="job hunt" className='img main-img'/>
			</div>
		</main>
	);
}

export default Landing;
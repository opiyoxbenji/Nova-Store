import React from 'react';

const Footer = () => {
	return (
		<>
			<footer className='py-3'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-5'>
							<div className='footer-top-data d-flex gap-30 align-items-center'></div>
						</div>
					</div>
				</div>
			</footer>
			<footer className='py-3'></footer>
			<footer className='py-4'>
				<div className='row'>
					<div className='col-12'>
						<div className='text-center mb-0 text-white'>
							&copy; {new Date().getFullYear()} Powered by Nova
							Nexus
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;

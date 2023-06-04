import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsTwitter, BsReddit } from 'react-icons/bs';

const Footer = () => {
	return (
		<>
			<footer className='py-4'>
				<div className='container-xxl'>
					<div className='row align-items-center'>
						<div className='col-5'>
							<div className='footer-top-data d-flex gap-30 align-items-center'>
								<img src='images/newsletter.png' alt='letter' />
								<h2 className='mb-0 text-white'>
									Subscribe to my Newsletter
								</h2>
							</div>
						</div>
						<div className='col-7'>
							<div className='input-group'>
								<input
									type='text'
									className='form-control py-1'
									placeholder='Email address'
									aria-label='Email address'
									aria-describedby='basic-addon2'
								/>
								<span
									className='input-group-text p-2'
									id='basic-addon2'
								>
									Subscribe
								</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<footer className='py-4'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-4'>
							<h4 className='text-white mb-4'>Contact Us</h4>
							<div>
								<address className='text-white fs-6'>
									Bukasa Rd near, <br /> Afroman Designs
									Limited
								</address>
								<a
									href='tel:+256 752684025'
									className='mt-4 d-block mb-2 text-white'
								>
									+256 752684025
								</a>
								<a
									href='mailto:opiyosbenji@gmail.com'
									className='mt-2 d-block mb-0 text-white'
								>
									opiyosbenji@gmail.com
								</a>
								<div className='social-icons d-flex align-items-center gap-30 '>
									<a className='text-white' href=''>
										<BsGithub className='fs-4' />
									</a>
									<a className='text-white' href=''>
										<BsLinkedin className='fs-4' />
									</a>
									<a className='text-white' href=''>
										<BsTwitter className='fs-4' />
									</a>
									<a className='text-white' href=''>
										<BsReddit className='fs-4' />
									</a>
								</div>
							</div>
						</div>
						<div className='col-3'>
							<h4 className='text-white mb-4'>Information</h4>
							<div className='footer-links d-flex flex-column'>
								<Link className='text-white py-2 mb-1'>
									Privacy Policy
								</Link>
								<Link className='text-white py-2 mb-1'>
									Refund Poilcy
								</Link>
								<Link className='text-white py-2 mb-1'>
									Shipping Policy
								</Link>
								<Link className='text-white py-2 mb-1'>
									Terms of Service
								</Link>
								<Link className='text-white py-2 mb-1'>
									Blogs
								</Link>
							</div>
						</div>
						<div className='col-3'>
							<h4 className='text-white mb-4'>Account</h4>
							<div className='footer-links d-flex flex-column'>
								<Link className='text-white py-2 mb-1'>
									Search
								</Link>
								<Link className='text-white py-2 mb-1'>
									About Us
								</Link>
								<Link className='text-white py-2 mb-1'>
									FAQ
								</Link>
								<Link className='text-white py-2 mb-1'>
									Contact
								</Link>
								<Link className='text-white py-2 mb-1'>
									Size Chart
								</Link>
							</div>
						</div>
						<div className='col-2'>
							<h4 className='text-white mb-4'>Links</h4>
							<div className='footer-links d-flex flex-column'>
								<Link className='text-white py-2 mb-1'>
									Laptops
								</Link>
								<Link className='text-white py-2 mb-1'>
									Tablets
								</Link>
								<Link className='text-white py-2 mb-1'>
									Headphones
								</Link>
								<Link className='text-white py-2 mb-1'>
									Watches
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
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

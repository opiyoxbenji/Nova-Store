import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<section className='home-wrapper-1 py-5'>
				<div className='container-xxl'>
					<div className='row'>
						<div className='col-6'>
							<div className='main-banner position-relative p-3'>
								<img
									src='images/main-banner-1.jpg'
									className='img-fluid rounded-3'
									alt='main banner'
								/>
								<div className='main-banner-content position-absolute'>
									<h4>SUPERCHARGED FOR PROS</h4>
									<h5>iPad Pro</h5>
									<p>From $999.00 or 41.62/mo</p>
									<Link className='button'>BUY NOW</Link>
								</div>
							</div>
						</div>
						<div className='col-6'>
							<div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
								<div className='small-banner position-relative '>
									<img
										src='images/catbanner-01.jpg'
										className='img-fluid rounded-3'
										alt='small banner'
									/>
									<div className='small-banner-content position-absolute'>
										<h4>Best seller</h4>
										<h5>Laptops Max</h5>
										<p>
											From $1699.00 <br /> or 64.62/mo
										</p>
									</div>
								</div>
								<div className='small-banner position-relative '>
									<img
										src='images/catbanner-03.jpg'
										className='img-fluid rounded-3'
										alt='small banner'
									/>
									<div className='small-banner-content position-absolute'>
										<h4>New Arrivals</h4>
										<h5>Buy iPad Air</h5>
										<p>
											From $699.00 <br /> or 49.91/mo
										</p>
									</div>
								</div>
								<div className='small-banner position-relative '>
									<img
										src='images/catbanner-02.jpg'
										className='img-fluid rounded-3'
										alt='small banner'
									/>
									<div className='small-banner-content position-absolute'>
										<h4>15% off</h4>
										<h5>Smartwatch 7</h5>
										<p>
											Shop the latest <br /> band styles
											and colors
										</p>
									</div>
								</div>
								<div className='small-banner position-relative '>
									<img
										src='images/catbanner-04.jpg'
										className='img-fluid rounded-3'
										alt='small banner'
									/>
									<div className='small-banner-content position-absolute'>
										<h4>Free Engraving</h4>
										<h5>Airpods Max</h5>
										<p>
											High-fidelity playback <br /> &
											ultra-low distortion
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;

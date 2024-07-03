import React from 'react';

const Footer = () => {
	return (
		<div className='container'>
			<footer className='row text-bg-dark py-3'>
				<div className='col-4'>
					<div className='row'>
						<div className='col-12'>
							<h2>
								<i className='bg-success'></i> MULTI COLLECTION
							</h2>
						</div>
						<div className='col-12'>
							<strong>Email: </strong>
							<a
								href='mailto:info@movieinfo.com'
								className='link-light text-decoration-none'
							>
								info@multicollectioninfo.com
							</a>
						</div>
					</div>
				</div>
				<div className='col-4'>
					<div className='row'>
						<div className='col-12'>
							<h3>Find us on</h3>
						</div>
						<div className='col-12 my-3'>
							<a
								href='https://facebook.com'
								target='_blank'
								className='link-primary'
							>
								<i className='fa fa-facebook fa-2x'></i>
							</a>
							<a
								href='https://twitter.com'
								target='_blank'
								className='link-info ms-2'
							>
								<i className='fa fa-twitter fa-2x'></i>
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								className='link-danger ms-2'
							>
								<i className='fa fa-instagram fa-2x'></i>
							</a>

							<a
								href='https://whatsapp.com'
								target='_blank'
								className='link-success ms-2'
							>
								<i className='fa fa-whatsapp fa-2x'></i>
							</a>
						</div>
					</div>
				</div>
				<div className='col-4'>
					<div className='row'>
						<div className='col-12'>
							<h4 className=''>Contact Details</h4>
							<div className=''>
								<ul className='navbar-nav my-3 mx-auto mb-2 mb-lg-0'>
									<li>98-11125876</li>
									<li>Kupondole, Lalitpur</li>
									<li>Nepal</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='col-12 my-3 text-center'>
					&copy; MULTI COLLECTION, {new Date().getFullYear()}. All rights
					reserved.
				</div>
			</footer>
		</div>
	);
};

export default Footer;

/** @format */

import { Carousel } from "3d-react-carousal";
export const Testimonials = (props) => {
	let slides = [
		<img src='img/Eminent Clients/01.jpg' alt='1' />,
		<img src='img/Eminent Clients/02.jpg' alt='2' />,
		<img src='img/Eminent Clients/03.jpg' alt='3' />,
	];
	return (
		<div id='testimonials'>
			<div className='container'>
				<div className='section-title text-center'>
					<h2>Our Eminent Clients</h2>
				</div>
				<div className='row'>
					<link
						href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
						rel='stylesheet'
						integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
						crossorigin='anonymous'
					/>
					<Carousel slides={slides} autoplay={true} interval={5000} />
				</div>
			</div>
		</div>
	);
};

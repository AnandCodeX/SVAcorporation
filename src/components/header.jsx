/** @format */

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export const Header = (props) => {
	return (
		<header id='header'>
			<div className='intro'>
				<div className='overlay'>
					<div className='container '>
						<Carousel autoPlay={true} infiniteLoop={true} interval={2500}>
							<div>
								<img src='img/Home/9.jpg' />
							</div>
							<div>
								<img src='img/Home/1.jpg' />
							</div>
							<div>
								<img src='img/Home/2.jpg' />
							</div>
							<div>
								<img src='img/Home/3.jpg' />
							</div>
							<div>
								<img src='img/Home/4.jpg' />
							</div>
							<div>
								<img src='img/Home/5.jpg' />
							</div>
							<div>
								<img src='img/Home/6.jpg' />
							</div>
							<div>
								<img src='img/Home/7.jpg' />
							</div>
							<div>
								<img src='img/Home/8.jpg' />
							</div>
						</Carousel>
					</div>
				</div>
			</div>
		</header>
	);
};

/** @format */

import Modal from "react-modal";
import "./gallery.css";
import React, { useState } from "react";
Modal.setAppElement("#root");

export const Gallery = (props) => {
	const [ModalIsOpen, setModalIsOpen] = useState(false);
	const [hos, sethos] = useState(false);
	const [mana, setMana] = useState(false);
	const [agri, setAgri] = useState(false);
	const [insu, setInsu] = useState(false);
	const [edu, setEdu] = useState(false);

	return (
		<div id='portfolio' className='text-center'>
			<div className='container'>
				<Modal
					isOpen={ModalIsOpen}
					onRequestClose={() => setModalIsOpen(false)}
					style={{
						overlay: { background: "grey", marginTop: "35px" },
						content: { marginTop: "50px" },
					}}>
					<i
						className='fa fa-times'
						aria-hidden='true'
						style={{
							color: "red",
							cursor: "pointer",
							fontSize: "25px",
							display: "flex",
							justifyContent: "flex-end",
						}}
						onClick={() => setModalIsOpen(false)}></i>
					<img src='img/Verticals/1.jpg' className='center' />
					<h1 className='vertivals'> Architectural Design & Build </h1>
					<h3>
						We are the passion. We are here to transform your Dreams into
						Reality. We nurture your Pride & Self Esteem.
					</h3>
					<h3>We specialized in serving following industries/sectors:</h3>
					<ul>
						<li>Retail</li>
						<li>Shopping Malls</li>
						<li>Restaurants & Hospitalilty Industry</li>
						<li>Cinema Theaters</li>
						<li>Commercial</li>
						<li>Industrial and Residential</li>
					</ul>
				</Modal>

				<Modal
					isOpen={hos}
					onRequestClose={() => sethos(false)}
					style={{
						overlay: { background: "grey", marginTop: "35px" },
						content: { marginTop: "50px" },
					}}>
					<i
						className='fa fa-times'
						aria-hidden='true'
						style={{
							color: "red",
							cursor: "pointer",
							fontSize: "25px",
							display: "flex",
							justifyContent: "flex-end",
						}}
						onClick={() => sethos(false)}></i>
					<img src='img/Verticals/2.jpg' className='center' />
					<h1 className='vertivals'>Hospitality </h1>
					<ul>
						<li>Marriage Parties</li>
						<li>Buffet Breakfast, Lunch and Dinner</li>
						<li>Nutritious Snacks</li>
						<li>Birthday Parties</li>
						<li>Family Get Together</li>
						<li>Reunion get together events</li>
						<li>Diwali and other festival Sweets Logistics</li>
						<li>Calorie base Tiffin Services</li>
						<li>Early Morning Get Together Module</li>
					</ul>
					<br />
					<h4>
						SVA Corporation is poised to enter into hospitality industry which
						is being focused mainly into Catering Business which as
						diversification such as Marriage Parties/Buffet Lunch and
						Dinners/Healthy &amp Nutritious Snacks/Birthday Parties/Family Get
						Together/Reunion of Schools and Colleges etc
					</h4>

					<h4>
						SVA Corporation arranges to despatch Diwali Sweets from Mumbai/Goa
						in any country across globe within record time and has been
						instrumental in developing the export of few Indian Fruits Industry
					</h4>
				</Modal>

				<Modal
					isOpen={mana}
					onRequestClose={() => setMana(false)}
					style={{
						overlay: { background: "grey", marginTop: "35px" },
						content: { marginTop: "50px" },
					}}>
					<i
						className='fa fa-times'
						aria-hidden='true'
						style={{
							color: "red",
							cursor: "pointer",
							fontSize: "25px",
							display: "flex",
							justifyContent: "flex-end",
						}}
						onClick={() => setMana(false)}></i>
					<img src='img/Verticals/3.jpg' className='center' />
					<h1 className='vertivals'>management </h1>
					<h3>SVA Corporation specializes in :</h3>
					<ul>
						<li>Business Advisory</li>
						<li>E Commerce Start up Guidelines</li>
						<li>Mergers and Acquisitions</li>
						<li>Brand Management</li>
						<li>Product Management</li>
						<li>Communication</li>
						<li>Joint Ventures Domestic and International</li>
						<li>Sales</li>
						<li>Marketing</li>
						<li>Advertising</li>
						<li>Market Intelligence</li>
						<li>Brand Licensing</li>
						<li>Data Analysis</li>
						<li>Cost Control Management Module</li>
						<li>Legal Contracts Management</li>
						<li>Digital Marketing</li>
						<li>Profitable Investment Opportunity Management</li>
						<li>Training Management</li>
						<li>Market Capitalization</li>
						<li>Image Consulting</li>
						<li>Due Diligence</li>
						<li>Business Valuation Module</li>
						<li>Top Management Personal Training</li>
						<li>Visual Merchandising</li>
						<li>Business Events</li>
						<li>New Product Launches</li>
						<li>Franchisee Management</li>
						<li>Distribution Management</li>
						<li>Logistic Management</li>
						<li>Catchment Analysis Management</li>
						<li>Insurance Management</li>
					</ul>
				</Modal>

				<Modal
					isOpen={agri}
					onRequestClose={() => setAgri(false)}
					style={{
						overlay: { background: "grey", marginTop: "35px" },
						content: { marginTop: "50px" },
					}}>
					<i
						className='fa fa-times'
						aria-hidden='true'
						style={{
							color: "red",
							cursor: "pointer",
							fontSize: "25px",
							display: "flex",
							justifyContent: "flex-end",
						}}
						onClick={() => setAgri(false)}></i>
					<img src='img/Verticals/4.jpg' className='center' />
					<h1 className='vertivals'>Agriculture </h1>
					<h3>
						SVA Corporation contemplates to enter into Contract farming with
						most advanced technologies and invites enthusiastic farmers to join
						in our mission.
					</h3>
				</Modal>

				<Modal
					isOpen={insu}
					onRequestClose={() => setInsu(false)}
					style={{
						overlay: { background: "grey", marginTop: "35px" },
						content: { marginTop: "50px" },
					}}>
					<i
						className='fa fa-times'
						aria-hidden='true'
						style={{
							color: "red",
							cursor: "pointer",
							fontSize: "25px",
							display: "flex",
							justifyContent: "flex-end",
						}}
						onClick={() => setInsu(false)}></i>
					<img src='img/Verticals/5.jpg' className='center' />
					<h1 className='vertivals'>Insurance </h1>
					<h3>
						SVA Corporation intends to help everyone have a safe and secured
						life and hence has come up with Insurance working. We work in
						providing Corporate & Personal Insurances along with scientific
						wealth management programs and portfolios.
					</h3>
				</Modal>

				<Modal
					isOpen={edu}
					onRequestClose={() => setEdu(false)}
					style={{
						overlay: { background: "grey", marginTop: "35px" },
						content: { marginTop: "50px" },
					}}>
					<i
						className='fa fa-times'
						aria-hidden='true'
						style={{
							color: "red",
							cursor: "pointer",
							fontSize: "25px",
							display: "flex",
							justifyContent: "flex-end",
						}}
						onClick={() => setEdu(false)}></i>
					<img src='img/Verticals/6.jpg' className='center' />
					<h1 className='vertivals'>Education </h1>
					<h4>
						Education is important in life because it gives people the skills
						and tools they need to navigate the world. Without education, people
						would not be able to read, write, calculate or communicate; they
						would also not be able to perform jobs competently, accurately and
						safely. Education also teaches people about the world in which they
						live, including information about history, philosophy and culture.
					</h4>
				</Modal>

				<div className='section-title'>
					<h2>Verticals</h2>
				</div>
				<div className='row'>
					<div className='portfolio-items'>
						<div
							className='col-sm-6 col-md-4 col-lg-4'
							onClick={() => setModalIsOpen(true)}>
							<div className='portfolio-item'>
								<div className='hover-bg'>
									{" "}
									<h4>Architectural Design & Build</h4>
									<a title='Project Title' data-lightbox-gallery='gallery1'>
										<div className='hover-text'>
											<h4>
												''Design creates culture. Culture shapes values. Values
												determine the future." -Robert L. Peters.
											</h4>
										</div>
										<img
											src='img/portfolio/01-small.jpg'
											className='img-responsive'
											alt='Project Title'
										/>{" "}
									</a>{" "}
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4 col-lg-4'>
							<div className='portfolio-item'>
								<div className='hover-bg' onClick={() => sethos(true)}>
									{" "}
									<h4>Hospitality</h4>
									<a title='Project Title' data-lightbox-gallery='gallery1'>
										<div className='hover-text'>
											<h4>
												"Hospitality is not to change people, but to offer them
												space where change can take place." - Henri Nouwen.
											</h4>
										</div>
										<img
											src='img/portfolio/02-small.jpg'
											className='img-responsive'
											alt='Project Title'
										/>{" "}
									</a>{" "}
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4 col-lg-4'>
							<div className='portfolio-item'>
								<div className='hover-bg' onClick={() => setMana(true)}>
									{" "}
									<h4>Management Consulting</h4>
									<a title='Project Title' data-lightbox-gallery='gallery1'>
										<div className='hover-text'>
											<h4>
												"Management is all about managing in the short term,
												while developing the plans for the long term."- Jack
												Welch.
											</h4>
										</div>
										<img
											src='img/portfolio/03-small.jpg'
											className='img-responsive'
											alt='Project Title'
										/>{" "}
									</a>{" "}
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4 col-lg-4'>
							<div className='portfolio-item'>
								<div className='hover-bg' onClick={() => setAgri(true)}>
									{" "}
									<h4>Agriculture</h4>
									<a title='Project Title' data-lightbox-gallery='gallery1'>
										<div className='hover-text'>
											<h4>
												"Agriculture is not a Farming, it's a Feeding"- Reddy
												Sai{" "}
											</h4>
										</div>
										<img
											src='img/portfolio/04-small.jpg'
											className='img-responsive'
											alt='Project Title'
										/>{" "}
									</a>{" "}
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4 col-lg-4'>
							<div className='portfolio-item'>
								<div className='hover-bg' onClick={() => setInsu(true)}>
									{" "}
									<h4>Insurance </h4>
									<a title='Project Title' data-lightbox-gallery='gallery1'>
										<div className='hover-text'>
											<h4>
												"You don't need to pray to God any more when there are
												storms in the sky, but you do have to be insured" -
												Bertolt Brecht
											</h4>
										</div>
										<img
											src='img/portfolio/05-small.jpg'
											className='img-responsive'
											alt='Project Title'
										/>{" "}
									</a>{" "}
								</div>
							</div>
						</div>
						<div className='col-sm-6 col-md-4 col-lg-4'>
							<div className='portfolio-item'>
								<div className='hover-bg' onClick={() => setEdu(true)}>
									{" "}
									<h4>Education</h4>
									<a title='Project Title' data-lightbox-gallery='gallery1'>
										<div className='hover-text'>
											<h4>
												"Education is not the learning of facts, but the
												training of the mind to think." - Albert Einstein.
											</h4>
										</div>
										<img
											src='img/portfolio/06-small.jpg'
											className='img-responsive'
											alt='Project Title'
										/>{" "}
									</a>{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

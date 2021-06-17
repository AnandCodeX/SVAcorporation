/** @format */

import Modal from "react-modal";
import React, { useState } from "react";
import "./gallery.css";
Modal.setAppElement("#root");
export const Team = (props) => {
	const [ModalIsOpen, setModalIsOpen] = useState(false);

	let modal = () => {
		setModalIsOpen(true);
	};

	return (
		<div id='team' className='text-center'>
			<div className='container'>
				<Modal
					isOpen={ModalIsOpen}
					onRequestClose={() => setModalIsOpen(false)}
					style={{
						overlay: { background: "grey", marginTop: "35px" },
						content: {
							marginTop: "50px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-start",
						},
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
					<img src='img/team/1.jpg' />
					<img src='img/team/2.jpg' />
					<img src='img/team/3.jpg' />
				</Modal>

				<div className='col-md-8 col-md-offset-2 section-title'>
					<h2>Meet the Team</h2>
				</div>
				<div id='row'>
					{props.data
						? props.data.map((d, i) => (
								<div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
									<div className='thumbnail' onClick={modal}>
										{" "}
										<img src={d.img} alt='...' className='team-img' />
										<div className='caption'>
											<h4>{d.name}</h4>
											<p>{d.job}</p>
										</div>
									</div>
								</div>
						  ))
						: "loading"}
				</div>
			</div>
		</div>
	);
};

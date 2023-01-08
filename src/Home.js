import React from 'react';
import './Home.css';
import Torre1 from "./Image/Torre_Civica1.JPG";

const Home = () => {

	window.scrollTo(0,0);
	
	return (
	<div className='mt-6'>
		<h1 className='d-flex justify-content-center' data-aos="fade-down">Introduzione</h1>

		<div className='row justify-content-center'>
			<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
			In questo sito web andremmo a pralare riguardante il fenomeno della torre civica di Saluzzo, che si trova in via san Giovanni, il quale
			si dice che l'ombra di una torre si rispecchia perfettamente sopra al campanile di una chiesa, cosa troppo strana per essere casuale, per questo il 22 dicembre 2022
			con la nostra classe ed altri classi ci siamo recati per visionare questo fenomeno. Quetsa idea è nata dal professore Giletta il cui si è accorto
			lui stesso del fenomeno, una volta arrivati di fronte alla torre civica abbiamo aspettatto il momento giusto per magari scattare qualche foto ma
			purtroppo questa volta non ci è andata bene. Questa era una breve introduzione di quello che andremo a vedere in questa pagina web! 
			</div>
		</div>

		<div className='d-flex justify-content-center' data-aos="flip-up">
			<img src={Torre1} alt="Prima foto torre" className='img-fluid img-thumbnail mt-3'/>
		</div>
	</div>
  )
}

export default Home
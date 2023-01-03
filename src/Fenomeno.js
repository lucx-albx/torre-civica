import React from 'react'
import './Fenomeno.css'
import NoShwTower from './Image/NoOmbraTorre.JPG'
import YesShwTower from './Image/Ombra_Torre_Civica.JPG'
import GilettaImage from './Image/Franco_Giletta.jpg'

const Fenomeno = () => {
	return (
		<div className='mt-6'>
			<h1 className='d-flex justify-content-center text-center' data-aos="fade-down">Spiegazione Fenomeno</h1>

			<div className='row justify-content-center'>
				<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
					Come ho già introdotto nella home questo fenomeno parla di due torri presenti a Saluzzo che in corrispondenza del solstizio d'inverno,
					si verifica una perfetta proiezione dell'ombra dell'antica Torre Civica sul Campanile della Chiesa di San Giovanni. È un'autentica "performance" 
					di architetture che, grazie alla luce solare, diventano dinamiche: il Campanile gotico di San Giovanni "abbraccia", fino a contenere perfettamente 
					in tutte le sue parti, l'ombra della Torre rinascimentale. Chi furono i committenti e gli artefici delle due meravigliose costruzioni? Ma, soprattutto, 
					l'effetto è puramente casuale o è voluto? Per la soluzione dell'enigma, <strong>Franco Giletta</strong> ci propone all'interno del suo libro 
					un'articolata ed approfondita analisi del prodigioso fenomeno che diventa occasione per un itinerario tra monumenti e opere d'arte saluzzesi. 
					Nell'epoca della riproducibilità questo evento, che per tipologia e perfezione rappresenta un fenomeno in Europa, diviene ogni anno un turistico 
					richiamo iconico all'arte medievale e rinascimentale di Saluzzo, la cui bellezza non finirà mai di meravigliare. Per questo motivo il 22/12/2022 ci
					siamo recati presso la zona del campanile per andare a visionare in prima persona il fenomeno, ma purtroppo quel giorno il tempo non era dalla nostra 
					parte e il riflesso dell'ombra della torre, sul campanile, non è perfettamente rispecchiata.
				</div>
			</div>

			<div className='row mt-3'>
				<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center classe_img_con_didascalia' data-aos="zoom-in-right">
					<img src={NoShwTower} alt="Torre Prima" className='img-fluid img-thumbnail'/>
					<p>Campanile prima del fenomeno</p>
				</div>

				<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 mt-sm-3 mt-xl-0 mt-lg-0 mt-md-0 d-flex justify-content-center classe_img_con_didascalia' data-aos="zoom-in-left">
					<img src={YesShwTower} alt="Torre Dopo" className='img-fluid img-thumbnail'/>
					<p>Campanile durante il fenomeno, purtroppo il tempo non era dalla nostra parte e non si rispecchia perfettamente l'ombra</p>
				</div>
			</div>

			<h1 className='d-flex justify-content-center text-center mt-5' data-aos="flip-right">Chi è Franco Giletta?</h1>

			<div className='row align-items-center justify-content-center'>
				<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center' data-aos="zoom-in-right">
					Franco Giletta è nato a Saluzzo (Cn) nel 1967, vive e lavora a Saluzzo con studio nella Torre Rotonda del Castello di Envie.
					Negli anni universitari a Roma ha avuto modo di frequentare l’ambiente artistico dell’Anacronismo e della Pittura Colta. 
					Ritrattista, è stato allievo di Mario Donizetti a Bergamo. Dal 1995 ha iniziato un’intensa attività espositiva in Italia e all’estero. 
					Sempre nel 1995 è stato invitato, unico italiano dell’anno, dalla “Royal Society of Portrait Painters” di Londra all’esposizione annuale dei ritrattisti. 
					Attivo anche nell’arte sacra, nel 2004, su interessamento della galleria Il Polittico di Roma, una sua pala d’altare raffigurante “S. Antonio Maria Claret” 
					è stata collocata in permanenza nella Chiesa di Santa Lucia del Gonfalone a Roma. Sue opere si trovano in collezioni private in Italia e all'estero tra cui 
					il Museo Stauros e la collezione Bulgari.
					Nel 2011 è stato invitato ad esporre dal Prof. Vittorio Sgarbi al Padiglione Regionale della 54° Biennale di Venezia.
					Nel 2013 ha realizzato il doppio ritratto di Lucia Bosè e Magaly Solier utilizzato per il manifesto del film "Alfonsina y el mar".
					Nel 2015 una sua opera è stata esposta nella mostra "Il Tesoro d'Italia" a Expo Milano 2015.
					Nel 2016 ha realizzato il dipinto "Italy - Angel of Peace" esposto nella sede di Eataly al World Trade Center a New York.
					Nel 2022 infine pubblica il libro l' ombra della torre di Saluzzo il quale cerca di rispondere all'enigma della torre e del campanile.
				</div>

				<div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 d-flex justify-content-center mt-3 mt-sm-3 mt-xl-0 mt-lg-0 mt-md-0' data-aos="zoom-in-up">
					<img src={GilettaImage} alt="Torre Dopo" className='img-fluid img-thumbnail'/>
				</div>
			</div>

		</div>
	)
}

export default Fenomeno
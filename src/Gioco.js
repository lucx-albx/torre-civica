import React, {useState} from 'react'
import './Gioco.css'

const Gioco = () => {
	const [Score, setScore] = useState(0)
	window.scrollTo(0,0)

	const Check_Answer =()=>{
		let Final_Score = 0
		let All_First_Answer = document.querySelectorAll("#radio1")
		let All_Second_Answer = document.querySelectorAll("#radio2")
		let All_Third_Answer = document.querySelectorAll("#radio3")
		let All_Fourth_Answer = document.querySelectorAll("#radio4")
		let Box_Domanda1 = document.querySelector(".box-domanda1")
		let Box_Domanda2 = document.querySelector(".box-domanda2")
		let Box_Domanda3 = document.querySelector(".box-domanda3")
		let Box_Domanda4 = document.querySelector(".box-domanda4")
		let Box_Domanda5 = document.querySelector(".box-domanda5")
		let Box_Domanda6 = document.querySelector(".box-domanda6")
		let Box_Domanda7 = document.querySelector(".box-domanda7")
		let Box_Domanda8 = document.querySelector(".box-domanda8")
		let result = document.querySelector(".Final-Result")
		
		//Domanda1
		if(All_Second_Answer[0].checked == true){
			Final_Score += 1
			Box_Domanda1.style.border = "none"
		} else
			Box_Domanda1.style.border = "1px dashed red"
		
		//Domanda2
		if(All_Second_Answer[1].checked == true){
			Final_Score += 1
			Box_Domanda2.style.border = "none"
		} else
			Box_Domanda2.style.border = "1px dashed red"
		
		//Domanda3
		if(All_First_Answer[2].checked == true){
			Final_Score += 1
			Box_Domanda3.style.border = "none"
		} else
			Box_Domanda3.style.border = "1px dashed red"	
		
		//Domanda4
		if(All_Fourth_Answer[3].checked == true){
			Final_Score += 1
			Box_Domanda4.style.border = "none"
		} else
			Box_Domanda4.style.border = "1px dashed red"
		
		//Domanda5
		if(All_First_Answer[4].checked == true){
			Final_Score += 1
			Box_Domanda5.style.border = "none"
		} else
			Box_Domanda5.style.border = "1px dashed red"

		//Domanda6
		if(All_Third_Answer[5].checked == true){
			Final_Score += 1
			Box_Domanda6.style.border = "none"
		} else
			Box_Domanda6.style.border = "1px dashed red"

		//Domanda7
		if(All_Second_Answer[6].checked == true){
			Final_Score += 1
			Box_Domanda7.style.border = "none"
		} else
			Box_Domanda7.style.border = "1px dashed red"

		//Domanda8
		if(All_Fourth_Answer[7].checked == true){
			Final_Score += 1
			Box_Domanda8.style.border = "none"
		} else
			Box_Domanda8.style.border = "1px dashed red"

		setScore(Final_Score)

		if(Final_Score == 8)
			result.innerHTML = `<div class='Spunta-verde'>✓</div>`
		else 
			result.innerHTML = `<div class='Spunta-errore'>𐄂</div>`
		
	
	}

	return (
		<div className='mt-6'>
			<h1 className='d-flex justify-content-center text-center mb-4' data-aos="fade-down">Gioco ombra della torre di Saluzzo</h1>

			<div className='d-flex justify-content-center'>
				<div className='row box-gioco justify-content-center' data-aos="zoom-in">
					<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 box-domanda1'>
						<h4>Domanda 1:</h4>
						<p>Quando avviene il fenomeno dell'ombra sul campanile?</p>

						<div className="form-check">
							<input name="gruppo1" type="radio" id="radio1" /> il primo gennaio alle 11 del mattino
							 
						</div>

						<div className="form-check">
							<input name="gruppo1" type="radio" id="radio2"/> durante il solstizio d'inverno
						</div>

						<div className="form-check">
							<input name="gruppo1" type="radio" id="radio3" /> a pasqua
						</div>

						<div className="form-check">
							<input name="gruppo1" type="radio" id="radio4"/> alle 11 di sera del 31/12
						</div>

					</div>

					<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 box-domanda2'>
						<h4>Domanda 2:</h4>
						<p>Chi e che scrisse il libro l'ombra della torre di Saluzzo?</p>
						<div className="form-check">
							<input name="gruppo2" type="radio" id="radio1" /> Giovanna Migliore
						</div>

						<div className="form-check">
							<input name="gruppo2" type="radio" id="radio2"/> Franco Giletta
						</div>

						<div className="form-check">
							<input name="gruppo2" type="radio" id="radio3" /> Flaviano Monge
						</div>

						<div className="form-check">
							<input name="gruppo2" type="radio" id="radio4"/> alle 11 di sera del capodanno
						</div>
					</div>

					<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 box-domanda3'>
						<h4>Domanda 3:</h4>
						<p>Quale ombra viene rispecchiata, e su cosa?</p>
						<div className="form-check">
							<input name="gruppo3" type="radio" id="radio1" /> L'ombra della torre civica viene rispecchiata sul campanile
						</div>

						<div className="form-check">
							<input name="gruppo3" type="radio" id="radio2"/> L'ombra del campanile viene rispecchiata sulla torre civica
						</div>

						<div className="form-check">
							<input name="gruppo3" type="radio" id="radio3" /> L'ombra della torre civica viene rispecchia sulla torre del castello
						</div>

						<div className="form-check">
							<input name="gruppo3" type="radio" id="radio4"/> L'ombra del campanile viene rispecchiata sulla torre del castello
						</div>
					</div>

					<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 box-domanda4'>
						<h4>Domanda 4:</h4>
						<p>Dove possiamo trovare la torre civica?</p>
						<div className="form-check">
							<input name="gruppo4" type="radio" id="radio1" /> In via Valoria Superiore
						</div>

						<div className="form-check">
							<input name="gruppo4" type="radio" id="radio2"/> In via Tapparelli
						</div>

						<div className="form-check">
							<input name="gruppo4" type="radio" id="radio3" /> In via Santa Chiara
						</div>

						<div className="form-check">
							<input name="gruppo4" type="radio" id="radio4"/> In via san Giovanni
						</div>
					</div>

					<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 box-domanda5'>
						<h4>Domanda 5:</h4>
						<p>Quando è nato Franco Giletta?</p>
						<div className="form-check">
							<input name="gruppo5" type="radio" id="radio1" /> Nel 1967
						</div>

						<div className="form-check">
							<input name="gruppo5" type="radio" id="radio2"/> Nel 1969
						</div>

						<div className="form-check">
							<input name="gruppo5" type="radio" id="radio3" /> Nel 1989
						</div>

						<div className="form-check">
							<input name="gruppo5" type="radio" id="radio4"/> nel 1957
						</div>
					</div>

					<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 box-domanda6'>
						<h4>Domanda 6:</h4>
						<p>Cosa fa Franco Giletta nel 2022?</p>
						<div className="form-check">
							<input name="gruppo6" type="radio" id="radio1" /> Il doppio ritratto di Lucia Bosè e Magaly Solier
						</div>

						<div className="form-check">
							<input name="gruppo6" type="radio" id="radio2"/> Il dipinto "Italy - Angel of Peace"
						</div>

						<div className="form-check">
							<input name="gruppo6" type="radio" id="radio3" /> Pubblica il libro l' ombra della torre di Saluzzo
						</div>

						<div className="form-check">
							<input name="gruppo6" type="radio" id="radio4"/> E' stata esposta nella mostra "Il Tesoro d'Italia" a Expo Milano
						</div>
					</div>

					<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 mb-xl-3 mb-lg-3 mb-md-3 box-domanda7'>
						<h4>Domanda 7:</h4>
						<p>Che giorno e mese può avvenire questo fenomeno?</p>
						<div className="form-check">
							<input name="gruppo7" type="radio" id="radio1" /> Il 22/10
						</div>

						<div className="form-check">
							<input name="gruppo7" type="radio" id="radio2"/> Il 22/12
						</div>

						<div className="form-check">
							<input name="gruppo7" type="radio" id="radio3" /> Il 29/02
						</div>

						<div className="form-check">
							<input name="gruppo7" type="radio" id="radio4"/> Il 23/09
						</div>
					</div>

					<div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mt-3 mb-3 box-domanda8'>
						<h4>Domanda 8:</h4>
						<p>Dov'è nato Franco Giletta?</p>
						<div className="form-check">
							<input name="gruppo8" type="radio" id="radio1" /> A Fossano
						</div>

						<div className="form-check">
							<input name="gruppo8" type="radio" id="radio2"/> A Verzuolo
						</div>

						<div className="form-check">
							<input name="gruppo8" type="radio" id="radio3" /> A Manta
						</div>

						<div className="form-check">
							<input name="gruppo8" type="radio" id="radio4"/> A Saluzzo
						</div>
					</div>
					
					<div className='col-12 d-flex justify-content-center mt-5 mb-2 '>
						<div onClick={Check_Answer} className="Button_Answer"><strong>Correggi</strong></div>
					</div>

					<div className='col-12 d-flex justify-content-center mb-5'>
						<strong className='d-flex align-items-center'>{Score}/8 pt.</strong>&nbsp;&nbsp;
						<div className='Final-Result'></div>
					</div>

				</div>
			</div>

		</div>
	)
}

export default Gioco

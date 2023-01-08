import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="row">
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
                <path d="M 0,600 C 0,600 0,300 0,300 C 127.71428571428572,332.6071428571429 255.42857142857144,365.2142857142857 366,375 C 476.57142857142856,384.7857142857143 570,371.75 691,337 C 812,302.25 960.5714285714287,245.7857142857143 1090,236 C 1219.4285714285713,226.2142857142857 1329.7142857142858,263.10714285714283 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="#1c2226" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
            </svg>
        </div>
            
        <div className="row justify-content-center color1">
            <div className="col-6 col-lg-4 col-xl-4 col-sm-6 col-md-4 txt-wh">
                <h5>- Chi Sono?</h5>
                <p>Sono Luca Alba Francesco ho 17 anni è svolgo la 4 ITIS INFO. <br/> A.S 2022/2023</p>
            </div>

            <div className="col-6 col-lg-4 col-xl-4 col-sm-6 col-md-4 txt-wh">
                <h5>- Come nasce il progetto?</h5>
                <p>Il progetto nasce dopo che abbiamo svolto un uscita scolastica un giorno per vedere il fenomeno dell'ombra della torre civica.</p>
            </div>
        </div>

    </div>
  )
}

export default Footer

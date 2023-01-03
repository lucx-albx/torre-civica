import React, { useState, useEffect } from 'react'
import './NavBar.css'
import Home from './Home.js'
import Fenomeno from './Fenomeno.js'
import Gioco from './Gioco.js'

const NavBar = () => {
    const [Loader, setLoader] = useState("")
    let Loading = ""
    let title = document.getElementsByTagName('title')[0]; 

    useEffect(() => {
        Load_Home_Flag()
    }, [])

    const Load_Home_Flag =()=>{
        title.innerHTML = "Home"

        setLoader(Loading = "Home")
        Load_Result()
    }

    const Load_Fenomeno_Flag =()=>{
        title.innerHTML = "Fenomeno"

        setLoader(Loading = "Fenomeno")
        Load_Result()
    }

    const Load_Gioco_Flag =()=>{
        title.innerHTML = "Gioco"

        setLoader(Loading = "Gioco")
        Load_Result()
    }

    const Load_Result =()=>{
        if (Loader == "Home")
            return <Home/>
        else if (Loader == "Fenomeno")
            return <Fenomeno/>
        else if (Loader == "Gioco")
            return <Gioco/>
    }

    return (
        <div>
            <div className='row justify-content-center header fixed-top'>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={Load_Home_Flag}> <strong className='header-text-button'>Home</strong> </button>
                    <button type="button" className="btn btn-secondary" onClick={Load_Fenomeno_Flag}> <strong className='header-text-button'>Fenomeno</strong> </button>
                    <button type="button" className="btn btn-secondary" onClick={Load_Gioco_Flag}> <strong className='header-text-button'>Gioco</strong> </button>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                {Load_Result()}
            </div>

        </div>
    )
}

export default NavBar

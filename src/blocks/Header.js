import React, { useState } from 'react'
import { FaApple, FaBars } from "react-icons/fa";


export const Header = () => {
    var activeBar = { "width": "200px", "overflow": "visible" }
    var deActiveBar = { "width": "0", "overflow": "hidden" }
    const [navBar, setNavBar] = useState(false)


    return (
        <>
            

                <div className='container-fluid p-3 bg-light d-flex align-items-center flex-row justify-content-between' style={{ "z-index": "1111" }}>
                    <FaApple className='fs-1' />
                    <FaBars className='fs-3' onClick={() => setNavBar(!navBar)} />
                </div>
                <div className='navigation bg-dark position-absolute 
                d-flex flex-column align-items-center
                h-100 pt-3 text-center top-0' style={navBar ? activeBar : deActiveBar}>
                    <a href='#' className='text-light'>Home</a>
                </div>
        
        </>
    )
}

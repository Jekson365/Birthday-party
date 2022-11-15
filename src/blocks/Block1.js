import React from 'react'
import cover from '../assets/cover.jpeg'

export const Block1 = () => {
    return (
        <>
            <div className='container-fluid overflow-hidden cover-img position-relative w-100' 
                style={{ "height": "100vh","backgroundImage":`url(${cover})`}}>
                
                <div className='container bg-light position-absolute p-5' 
                style={{"bottom":"100px","border-radius":"0 30px 30px 0",'width':"fit-content"}}>
                    <h1 className='lobster-font' style={{"color":"purple",'fontSize':"4.5rem"}}>Birtyday</h1>
                    <p className='fs-5'>Party</p>
                </div>

            </div>
        </>
    )
}

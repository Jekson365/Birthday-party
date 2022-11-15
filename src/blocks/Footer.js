import React from 'react'
import footCover from '../assets/g-6.jpg'

export const Footer = () => {
    return (
        <div className='container-fluid overflow-hidden cover-img position-relative w-100'
            style={{ "height": "100vh", "backgroundImage": `url(${footCover})` }}>

            <div className='container position-absolute p-5'
                style={{ "bottom": "100px", "border-radius": "0 30px 30px 0", 'width': "fit-content","background":"white" }}>
                <h1 className='fs-4'>Free consultation</h1>
                <div className='form-group d-flex w-100 flex-column alig-items-start w-100 border-0'>
                    <label for='name'>Name</label>
                    <input type='text' name='name' placeholder='Enter your name' className='p-3 border-0 bg-light m-2' style={{ "borderRadius": "30px" }} />
                </div>
                <div className='form-group w-100 d-flex flex-column alig-items-start w-100 border-0'>
                    <label for='mail '>Email</label>
                    <input type='email' name='mail' placeholder='Enter valid Email address' className='p-3 border-0 bg-light m-2' style={{ "borderRadius": "30px" }} />
                </div>
                <button className='view-more border-0'>Submit</button>
            </div>

        </div>
    )
}

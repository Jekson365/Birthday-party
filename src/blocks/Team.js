import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import member_1 from '../assets/member-1.jpg'
import member_2 from '../assets/member-2.jpg'
import member_3 from '../assets/member-3.jpg'
import member_4 from '../assets/member-4.jpg'
import member_5 from '../assets/member-5.jpg'

export const Team = () => {
    const team = [
        {
            img: member_1,
            name: "Nicole Stone",
            role: "Founder"
        },
        {
            img: member_2,
            name: "Nicole Stone",
            role: "Founder"
        },
        {
            img: member_3,
            name: "Nicole Stone",
            role: "Founder"
        },
        {
            img: member_4,
            name: "Nicole Stone",
            role: "Founder"
        },
        {
            img: member_5,
            name: "Nicole Stone",
            role: "Founder"
        },
        {
            desc: "​​While we were not the first home cleaning company in the UK, we take pride in being market leaders in introducing an instant online booking system plus the facility for our customers to login and control their cleaning service 24/7, 365 days a year putting you in complete control. Image from Freepik",
            name: "Nicole Stone",
            role: "Founder"
        },
    ]
    return (
        <div className='container-fluid' style={{ "height": "fit-content", "background": "rgb(255, 228, 242)" }}>
            <h1 className='h1 lobster-font text-center pt-3'>Our Team</h1>
            <div className='row d-flex justify-content-center'>
                {team.map((single) => {
                    return (
                        <div className='col-md-4 d-flex flex-column align-items-center m-4 p-5' style={{ "width": "fit-content", "background": "white" }}>

                            {single.img ?
                                <div className='image-cover overflow-hidden' ><img src={single.img} /> </div>
                                : <div className='image-cover-title' ><p className='' style={{"fontSize":"14px"}}>{single.desc}</p></div>}
                            <p className='fs-4 pt-5 name-color'>{single.name}</p>
                            <p className='fs-6'>{single.role}</p>
                            <FaInstagram className='fs-1' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

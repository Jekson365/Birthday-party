import React from 'react'
import member_1 from '../assets/p-1.jpg'
import member_2 from '../assets/p-2.jpg'
import member_3 from '../assets/p-3.jpg'
import member_4 from '../assets/p-4.jpg'
import member_5 from '../assets/p-5.jpg'
import member_6 from '../assets/p-6.jpg'

export const Parents = () => {
    const parents = [
        {
            img: member_1,
            name: "Nicole Stone",
            desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
        },
        {
            img: member_2,
            name: "Nicole Stone",
            desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
        },
        {
            img: member_3,
            name: "Nicole Stone",
            desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
        },
        {
            img: member_4,
            name: "Nicole Stone",
            desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
        },
        {
            img: member_5,
            name: "Nicole Stone",
            desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
        },
        {
            img: member_6,
            name: "Nicole Stone",
            desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
        },


    ]

    return (
        <>
            <div className='container-fluid' style={{ "height": "fit-content", "background": "rgb(255, 228, 242)" }}>
                <h1 className='h1 lobster-font text-center pt-3'>what parents say</h1>
                <div className='row d-flex justify-content-center'>
                    {parents.map((single) => {
                        return (
                            <>
                                <div className='col-md-4 parent-cover rounded m-3 p-3 d-flex flex-column text-center align-items-center justify-content-center'>
                                    <div className='image-parent-cover'>
                                        <img src={single.img} />
                                    </div>  
                                    <h1 className='fs-4 mt-3 bold'>{single.name}</h1>
                                    <p className='' style={{ "fontSize": "13px",'color':"gray"}}>{single.desc}</p>
                                    <hr style={{ "height": "5px", "width": "80%" }} />
                                    <p className='fs-6'>Monday,June 2022</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

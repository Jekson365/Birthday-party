import React from 'react'
import img_1 from '../assets/949561.png'
import img_2 from '../assets/5222211.png'
import img_3 from '../assets/808439.png'
import img_4 from '../assets/1457948.png'

import cover from '../assets/Untitled-1.jpg'

export const ToDo = () => {
    var todo = [
        {
            name: "Animators",
            desc: "Sample text,Click to select the text Element",
            img: img_1
        },
        {
            name: "Face Painting",
            desc: "Sample text,Click to select the text Element",
            img: img_2
        },
        {
            name: "Games",
            desc: "Sample text,Click to select the text Element",
            img: img_3
        },
        {
            name: "Quest",
            desc: "Sample text,Click to select the text Element",
            img: img_4
        },
    ]
    return (
        <div className='container-fluid w-100 p-5 fit-content-style' style={{ "height": "100vh" }}>
            <div className='container-fluid cover-img p-5 fit-content-style' style={{ "backgroundImage": `url(${cover})`}}>
                <h1 className='h1 lobster-font text-center'>What we do</h1>
                <div className='row d-flex flex-wrap align-items-center justify-content-center h-100'>
                    {todo.map((single) => {
                        return (
                            <div className='col-md-3 text-center'>
                                <img src={single.img} />
                                <p className='fs-5 m-3'>{single.name}</p>
                                <p className='p m-3'>{single.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

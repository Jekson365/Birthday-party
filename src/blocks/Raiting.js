import React, { useEffect, useState } from 'react'
import arrow from '../assets/arrow.png'

export const Raiting = () => {
    const [holiday, setHoliday] = useState(0)
    const [birthday, setBirtday] = useState(0)
    const [victory, setVictory] = useState(0)
    const [clients, setClients] = useState(0)

    const [start, setStart] = useState(false)

    const raiting = [
        {
            name: "Holiday",
            count: holiday
        },
        {
            name: "Birthday",
            count: birthday
        },
        {
            name: "Victory",
            count: victory
        },
        {
            name: "Clients",
            count: clients
        },
    ]
    useEffect(() => {
        setTimeout(() => {
            if (holiday < 500) {
                setHoliday(holiday + 1)
            }
            if (birthday < 140) {
                setBirtday(birthday + 1)
            }
            if (victory < 20) {
                setVictory(victory + 1)
            }
            if (clients < 57) {
                setClients(clients + 1)
            }
        }, 4)
    })

    return (
        <div className='container-fluid fit-content-style' style={{ "background": "#ffcc00" }} id='rait-cont'>
            <div className='row d-flex w-75 flex-wrap align-items-center justify-content-center h-100' style={{"margin":"0 auto"}}>
                {raiting.map((each) => {
                    return (
                        <div className='col-md-6 w-md-100 w-50  text-center'>
                            <h1 className='text-light' style={{ "fontSize": "3rem" }}>{each.count}</h1>
                            <p className='fs-4'>{each.name}</p>
                            <p className='fs-5'>Sample Text,click to select the text element</p>
                            <img src={arrow} style={{"width":"50px"}}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

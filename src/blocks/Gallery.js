import React from 'react'
import gallery_1 from '../assets/g-1.jpeg'
import gallery_2 from '../assets/g-2.jpeg'
import gallery_3 from '../assets/g-3.jpeg'
import gallery_4 from '../assets/g-4.jpeg'
import gallery_5 from '../assets/g-5.jpg'
import gallery_6 from '../assets/g-6.jpg'

export const Gallery = () => {
    const gallery = [gallery_1,gallery_2,gallery_3,gallery_4,gallery_5,gallery_6]
  return (
    <div className='container d-flex flex-column align-items-center'>
        <h1 className='h1 lobster-font text-center m-5'>Gallery</h1>
        <div className='row d-flex flex-wrap justify-content-center'>
                {gallery.map((each)=> {
                    return (
                        <div className='col-md-4 m-3 overflow-hidden' style={{"width":"300px","height":"300px",'overflow':"hidden"}}>
                            <img src={each} className='w-100 h-100 g-image' style={{"objectFit":"cover"}}/>
                        </div>
                    )
                })}
        </div>
        <a href='#' className='view-more m-5'>View More</a>
    </div>
  )
}

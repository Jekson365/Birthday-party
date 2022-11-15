import React from 'react'

export const Popup = () => {
  return (
    <div className='container-fluid p-5 d-flex flex-column text-center align-items-center justify-content-center' style={{"background":"#ffcc00",'height':"50vh"}}>
        <h1 className='lobster-font fs-1'>Book a Free consulation</h1>
        <p className='fs-6'>Sample Text,Click to select the text eleent</p>
        <a className='view-more bg-light'>view more</a>
    </div>
  )
}

import React from 'react'

const Banner = ({page}) => {
    return (
        <>
        <div className='bannerpadding'></div>
        <div className="banner">
            <div className="page">
                <h3 className="heading" style={{ textAlign: "left" }}>{page}</h3>
                <p className="subheading" style={{ textAlign: "left",color:"#fff" }}>Merging Fashion-forward Designs with Premium Materials</p>
            </div>
        </div>
        </>
    )
}

export default Banner
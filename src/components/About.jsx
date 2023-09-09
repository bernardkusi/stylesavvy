import React from 'react'
import aboutimage from '../images/aboutimage.jpg'

const About = () => {
    return (
        <div id="about">
            <div className="page">
                <div className="aboutflex">
                    <div className="image">
                        <img src={aboutimage} alt="about image"/>
                    </div>
                    <div className="abouttext">
                        <h3 className="heading" style={{ textAlign: "left" }}>About Us</h3>
                        <p className="subheading" style={{ textAlign: "left" }}>Merging Fashion-forward Designs with Premium Materials</p>
                        <p>
                            Step into the world of timeless elegance at [Boutique Name], where sophistication meets impeccable style. Indulge in our meticulously curated collection, crafted with the utmost care and attention to detail. From exquisite essentials to captivating statement pieces, we invite you to immerse yourself in the allure of refined fashion. Experience the epitome of class and embrace your own signature style with [Boutique Name].
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
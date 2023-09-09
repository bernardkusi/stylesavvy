import React from 'react'
import contact from '../images/contact.jpg';

const Testimonials = () => {
    return (
        <div id="testimonials">
            <div className="page">
                <h3 class="heading" style={{ textAlign: "left" }}>About Us</h3>
                <p class="subheading" style={{ textAlign: "left", color: "#fff" }}>Merging Fashion-forward Designs with Premium Materials</p>
                <div className="testimonial">
                    <div>
                        <div className="image">
                            <img src={contact} alt="contact image" />
                        </div>
                        <div className="details" style={{ padding: "2rem", background: "transparent" }}>
                            <div>
                                <p className="name">Bernard Kusi</p>
                                <p className="text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique et debitis dignissimos. Veniam vero, laudantium enim accusamus quae quos.
                                </p>
                                <div className="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
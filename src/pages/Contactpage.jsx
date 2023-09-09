import React from 'react'
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import contact from '../images/contact.jpg';


const Contactpage = () => {
  return (
    <Layout>
      <main>
        <Banner page={"Contact Us"} />

        <div className="contact">
          <div className="page">

            <div>
              <div className="image">
                <img src={contact} alt="contact image" />
              </div>

              <form action="">
                <p className="label">Send Us A Message</p>
                <div className="control">
                  <input type="text" name='name' id='name' />
                  <label htmlFor="name">Your Name</label>
                </div>

                <div className="control">
                  <input type="text" name='email' id='email' />
                  <label htmlFor="email">Your Email</label>
                </div>

                <div className="control">
                <textarea type="text" name='message' id='message'></textarea>
                  <label htmlFor="message">Your message</label>
                </div>

                <button className="click">Send meessage</button>

              </form>
            </div>

          </div>
        </div>

        <div id='map'>
          <div className="page">
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.43135023063!2d-0.19841308569500524!3d5.650567334263379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0xd78257e67498c1a0!2sUniversity%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1663650741563!5m2!1sen!2sgh" width={"100%"} height={"100%"} style={{border:"0"}} allowFullScreen="" loading="lazy" title='map' referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Contactpage
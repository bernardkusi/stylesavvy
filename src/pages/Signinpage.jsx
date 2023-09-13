import React from 'react'
import Layout from '../components/Layout';

const Signinpage = () => {
    return (
        <Layout>
            <main>
                <div className="page" style={{minHeight:"100vh"}}>
                    <div className="bannerpadding"></div>
                  <div className="form">
                  <form action="">
                    <div className="control">
                        <input type="text" name="email" id="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="control">
                        <input type="password" name="password" id="password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="click">Signin</button>
                  </form>
                  </div>
                </div>
            </main>
        </Layout>
    )
}

export default Signinpage
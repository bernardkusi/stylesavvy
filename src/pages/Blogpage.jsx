import React from 'react'
import Layout from '../components/Layout';
import Banner from '../components/Banner';


const Blogpage = () => {
    return (
        <Layout>
            <main>
                <Banner page={"Our Blog"} />

                <div className="page">
                    <div className="blog">

                        <div className="blogflex">
                            <div className="image"></div>
                            <div className="content">
                                <h3 className="title">Lorem ipsum dolor sit amet.</h3>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic pariatur ex autem dolore vel in similique architecto doloremque, odio non libero ratione nisi nostrum dolorem soluta veniam illum quae. Beatae, soluta!
                                </p>
                            </div>
                        </div>

                        <div className="blogflex">
                            <div className="image"></div>
                            <div className="content">
                                <h3 className="title">Lorem ipsum dolor sit amet.</h3>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic pariatur ex autem dolore vel in similique architecto doloremque, odio non libero ratione nisi nostrum dolorem soluta veniam illum quae. Beatae, soluta!
                                </p>
                            </div>
                        </div>

                        <div className="blogflex">
                            <div className="image"></div>
                            <div className="content">
                                <h3 className="title">Lorem ipsum dolor sit amet.</h3>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic pariatur ex autem dolore vel in similique architecto doloremque, odio non libero ratione nisi nostrum dolorem soluta veniam illum quae. Beatae, soluta!
                                </p>
                            </div>
                        </div>

                        <div className="blogflex">
                            <div className="image"></div>
                            <div className="content">
                                <h3 className="title">Lorem ipsum dolor sit amet.</h3>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic pariatur ex autem dolore vel in similique architecto doloremque, odio non libero ratione nisi nostrum dolorem soluta veniam illum quae. Beatae, soluta!
                                </p>
                            </div>
                        </div>

                        <div className="blogflex">
                            <div className="image"></div>
                            <div className="content">
                                <h3 className="title">Lorem ipsum dolor sit amet.</h3>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est hic pariatur ex autem dolore vel in similique architecto doloremque, odio non libero ratione nisi nostrum dolorem soluta veniam illum quae. Beatae, soluta!
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Blogpage
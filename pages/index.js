import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 font-weight-bold">
                                BLOGS/TUTORIALS
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead">
                                Best programming and web development blogs and tutorials on React Node NextJs and
                                JavaScript and also includes all types of Blogs and Tutorials
                            </p>
                        </div>
                    </div>
                </div>
           

                      

                    
            </article>
        </Layout>
    );
};

export default Index;

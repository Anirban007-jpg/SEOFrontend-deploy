import { isAuth } from '../../actions/auth';
import Layout from '../../components/Layout';
import Private from '../../components/auth/Private'
import Router  from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

const UserIndex = () => {
  
    useEffect(() => {
        if (!isAuth()){
            router.replace('/');
        }
    })
  

    if (isAuth() && isAuth().role === 1){
        Router.push('/admin');
    } else if (isAuth() && isAuth().role === 2){
        Router.push('/super-admin');
    }
    
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row mr-5 ml-5">
                    <div className="col-md-12 pt-5 pb-5">
                        <h2>User Dashboard</h2>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-group">
                                <li className="list-group-item">
                                    <Link href="/blogs">
                                        <a>View Blogs</a>
                                    </Link>
                                </li>
                                 <li className="list-group-item">
                                    <Link href="user/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <h1 style={{fontWeight: '700', fontDecoration: 'underline'}}>Blog Statistics</h1>
                        <hr/>
                        <p style={{fontSize: '1.5rem'}}>Nominated Blogs: 0</p>
                        <p style={{fontSize: '1.5rem'}}>Blogs Created: 0</p>
                        <p style={{fontSize: '1.5rem'}}>Created Blog Categories:</p>
                        {/* <ol>
                            <li>No Blogs to show</li>
                        </ol> */}
                        <p style={{marginLeft: '2rem'}}>No blogs to show</p>
                        <hr/>
                        <p style={{fontWeight: '800'}}>NOTE: Charts and pie Graphs will be added later as the development of this app progresses!</p>
                    </div>
                </div>                
            </div>
        </Layout>
    );
};

export default UserIndex;

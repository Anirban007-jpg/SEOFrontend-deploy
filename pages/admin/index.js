import Layout from '../../components/Layout';
import { getCookie, isAuth } from '../../actions/auth';
import router, { Router } from 'next/router';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const AdminIndex = () => {

    useEffect(() => {
        if (!isAuth()){
            router.replace('/');
        }
    })
  
    if (isAuth() && isAuth().role === 0){
        router.push('/user');
    } else if (isAuth() && isAuth().role === 2){
        router.push('/super-admin');
    }
    
    return (
        <Layout>
                <div className="container-fluid">
                    <div className="row mr-5 ml-5">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Admin Dashboard</h2>
                            <p style={{fontSize:'1rem', fontWeight: 'bolder', color: 'blue'}}>Welcome Administrator {isAuth().name}</p>           
                        </div>
                        <div className="col-md-4">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Category</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Create Tag</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                        <a href="/admin/crud/blog">Create Blog</a>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link href="/admin/update">
                                        <a>Update Profile</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <h1 style={{fontWeight: '700', fontDecoration: 'underline'}}>User Details</h1>
                        <p style={{fontSize: '1.5rem'}}>Address:  {isAuth().address}</p>
                        <p style={{fontSize: '1.5rem'}}>Email:  {isAuth().email}</p>
                        <p style={{fontSize: '1.5rem'}}>Mobile No.:  {isAuth().mobile_no}</p><hr/>
                        <h1 style={{fontWeight: '700', fontDecoration: 'underline'}}>Blog Statistics</h1>
                        <hr/>
                            <p style={{fontSize: '1.5rem'}}>Nominated Blogs: 0</p>
                            <p style={{fontSize: '1.5rem'}}>Created Nominated Blog Categories:</p>
                        {/* <ol>
                            <li>No Blogs to show</li>
                        </ol> */}
                        <p style={{marginLeft: '2rem'}}>No Nominated blogs to show</p>
                            <p style={{fontSize: '1.5rem'}}>Blogs Created: 1</p>
                            <p style={{fontSize: '1.5rem'}}>Created Blog Categories:</p>
                            <ol>
                                <li>React By Anirban</li>
                            </ol>
                        <hr/>
                        <p style={{fontWeight: '800'}}>NOTE: Charts and pie Graphs will be added later as the development of this app progresses!</p>
                    </div>
                    </div>                
                </div>
        </Layout>
    );
};

export default AdminIndex;

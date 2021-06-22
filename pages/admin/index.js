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
                            right
                        </div>
                    </div>                
                </div>
        </Layout>
    );
};

export default AdminIndex;

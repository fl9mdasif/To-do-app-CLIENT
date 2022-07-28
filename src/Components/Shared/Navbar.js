import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.config'

const Navbar = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }

    const menuItems =
        <>
            <li><Link to='/' href="#2">Home</Link></li>
            <li><Link to='/to-do-task' >To-Do</Link></li>
            <li><Link to='/completed-task' href="#2">Completed Task</Link></li>





            {
                user ?
                    // <button onClick={handleSignOut} className="btn btn-primary text-white border-none shadow-md bg-gradient-to-r  from-secondary to-primary"> Sign Out</button>
                    <button onClick={handleSignOut} className="btn bg-head text-text border-none shadow-md bg-gradient-to-r  from-red-200 to-red-400"> Sign Out</button>
                    :
                    <li><Link to='login' >Login</Link></li>
            }


        </>

    return (
        <div>
            <div className="navbar bg-base text-text">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label >
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base text-head rounded-box w-52" >
                            {menuItems}

                        </ul >
                    </div >
                    <a href="/" className="bg-base pl-3 font-bold text-head normal-case text-xl" > To-Do App</a >
                </div >
                <div className="navbar-center hidden lg:flex" >
                    <ul className="menu menu-horizontal p-0" >
                        {menuItems}
                    </ul >
                </div >
                {/* <div className="navbar-end">
                    <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label >
                </div> */}

            </div >
        </div >
    );
};

export default Navbar;
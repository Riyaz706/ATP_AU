import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
    navbarClass,
    navContainerClass,
    navBrandClass,
    navLinksClass,
    navLinkClass,
    navLinkActiveClass,
    pageBackground
} from '../styles/common';
import { toast } from 'react-hot-toast';
import { authStore } from '../store/authStore';

function RootLayout() {
    const { isAuthenticated, currentUser, logout } = authStore();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        toast.success('Logged out successfully');
        navigate('/login');
    };

    const getProfilePath = () => {
        if (!currentUser) return '/';
        if (currentUser.role === 'AUTHOR') return '/author-profile';
        if (currentUser.role === 'ADMIN') return '/admin-profile';
        return '/user-profile';
    };

    return (
        <div className={pageBackground}>
            {/* Navbar */}
            <nav className={navbarClass}>
                <div className={navContainerClass}>
                    <NavLink to="/" className={navBrandClass}>
                        BlogApp
                    </NavLink>

                    <div className={navLinksClass}>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? navLinkActiveClass : navLinkClass}
                        >
                            Home
                        </NavLink>

                        {!isAuthenticated ? (
                            <>
                                <NavLink 
                                    to="/register" 
                                    className={({ isActive }) => isActive ? navLinkActiveClass : navLinkClass}
                                >
                                    Register
                                </NavLink>
                                <NavLink 
                                    to="/login" 
                                    className={({ isActive }) => isActive ? navLinkActiveClass : navLinkClass}
                                >
                                    Login
                                </NavLink>
                            </>
                        ) : (
                            <>
                                {currentUser.role === 'AUTHOR' && (
                                    <NavLink 
                                        to="/add-article" 
                                        className={({ isActive }) => isActive ? navLinkActiveClass : navLinkClass}
                                    >
                                        Add Article
                                    </NavLink>
                                )}
                                <NavLink 
                                    to={getProfilePath()} 
                                    className={({ isActive }) => isActive ? navLinkActiveClass : navLinkClass}
                                >
                                    Profile
                                </NavLink>
                                <button
                                    onClick={handleLogout}
                                    className={`${navLinkClass} border-none bg-transparent cursor-pointer`}
                                >
                                    Logout
                                </button >
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="grow">
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;



import React from 'react';

import NotfoundPage from './pages/NotfoundPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import Setting from './pages/Setting';
import Item from './pages/Item';

const routes = [
    { 
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    { 
        path: '/about',
        exact: true,
        main: () => <AboutPage />
    },
    { 
        path: '/blog',
        exact: true,
        main: () => <BlogPage />
    },
    { 
        path: '/login',
        exact: true,
        main: () => <LoginPage  />
    },
    { 
        path: '/setting',
        exact: true,
        main: () => <Setting  />

    },
    { 
        path: '/blog/:id',
        exact: true,
        main: ({match}) => <Item match = {match} />

    },
    { 
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    },
];

export default routes;
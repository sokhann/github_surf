import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <nav className='flex justify-between items-center p-4 bg-sky-900 shadow-md text-white'>
            <header><h3 className='font-bold'>GithubSurf</h3></header>
            <ul className='flex gap-4'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </nav>
    )
}
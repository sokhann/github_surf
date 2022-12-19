

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { IRepo } from '../interfaces'
import { useAppSelector } from '../hooks'
import { favoritesActions } from '../store'

export function Repo({ repo }: { repo: IRepo }) {
    const { favorites } = useAppSelector(state => state.favorites)
    const [isFavorite, setIsFavorite] = useState(!!favorites.find(item => item.id === repo.id))

    const dispatch = useDispatch()
    const { add, remove } = bindActionCreators(favoritesActions, dispatch)

    const addToFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        add(repo)
        setIsFavorite(true)
    }

    const removeFromFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        remove(repo.id)
        setIsFavorite(false)
    }

    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className='flex justify-between items-start gap-3 p-3 transition-colors cursor-pointer rounded-xl hover:bg-slate-100'
        >
            <div>
                <span className="text-gray-500">{repo.owner.login}</span>
                <h6 className="font-bold">{repo.name}</h6>
                <p>{repo.description}</p>
                <p className='flex gap-4 text-gray-500 mt-2'>
                    <span className='flex items-center'>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path fill='#6b7280' fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                        </svg>
                        <span className="ml-1">{repo.forks_count} forks</span>
                    </span>
                    <span className='flex items-center'>
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path fill='#6b7280' fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                        </svg>
                        <span className="ml-1">{repo.watchers_count} watchers</span>
                    </span>
                </p>
            </div>
            <button
                className="transition-all"
                onClick={isFavorite ? removeFromFavorites : addToFavorites}
            >
                {
                    isFavorite
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#fbbf24' d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
                        : <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill='#fbbf24' d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" /></svg>
                }
            </button>
        </a>
    )
}
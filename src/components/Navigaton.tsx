import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
	return (
		<nav className="flex justify-between items-center p-4">
			<header>
				<Link to="/">
					<h1>GithubSurf</h1>
				</Link>
			</header>
			<ul className="flex gap-4 text-white">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/favorites">Favorites</Link>
				</li>
			</ul>
		</nav>
	);
}

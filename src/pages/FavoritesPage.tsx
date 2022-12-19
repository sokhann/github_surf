import React from 'react';
import { Repo } from '../components/Repo';
import { useAppSelector } from '../hooks'

export function FavoritesPage() {
	const { favorites } = useAppSelector(state => state.favorites)

	if (favorites.length === 0) return <p className="text-center">Empty</p>

	return (
		<section>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 border mb-4 bg-white rounded-xl">
				{favorites.map(item => (
					<li key={item.id}>
						<Repo repo={item} />
					</li>
				))}
			</ul>
		</section>
	)
}
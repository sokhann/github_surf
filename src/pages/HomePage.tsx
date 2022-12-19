import React, { useState, useEffect } from 'react';
import { useSearchUsersQuery, useLazyGetUserReposQuery } from '../store';
import { useDebounce } from '../hooks';
import { Repo } from '../components/Repo';

export function HomePage() {
	const [search, setSearch] = useState('');
	const [dropdown, setDropdown] = useState(false);

	const debounced = useDebounce(search);

	const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3,
	});

	const [
		fetchRepos,
		{ isLoading: reposLoading, data: repos }
	] = useLazyGetUserReposQuery();

	useEffect(() => {
		setDropdown(debounced.length >= 3 && !!data && data.length > 0);
	}, [debounced, data]);

	const clickHandler = (username: string) => {
		fetchRepos(username);
		setDropdown(false);
	};

	return (
		<section>
			{isError ? (
				<span className="flex rounded-md bg-red-500 p-3 text-white">
					Error occurred
				</span>
			) : (
				<div className="relative">
					<input
						type="text"
						className="p-3 w-full rounded-xl mb-2 h-[48px]"
						placeholder="Search by username..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>

					{dropdown && (
						<ul className="list-none absolute top-[54px] left-0 right-0 max-h-[300px] overflow-y-scroll shadow-lg rounded-xl border bg-white">
							{isLoading && <p className="p-3">Loading...</p>}
							{data
								? data.map((user) => (
									<li
										key={user.id}
										onClick={() => clickHandler(user.login)}
										className="flex py-3 px-4 hover:bg-slate-100 transition-colors cursor-pointer"
									>
										<img
											src={user.avatar_url}
											alt={user.login}
											className="w-6 h-6 mr-4"
										/>{' '}
										<span>{user.login}</span>
									</li>
								))
								: null}
						</ul>
					)}

					<div>
						{reposLoading && <p className="p-3">Loading repos...</p>}
						{repos && (
							<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3 border mb-4 bg-white rounded-xl">
								{repos.map((repo) => (
									<li
										key={repo.id}
									>
										<Repo repo={repo} />
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			)}
		</section>
	);
}

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Response, IUser, IRepo } from '../interfaces';

export const api = createApi({
	reducerPath: 'github/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/',
	}),
	endpoints: (build) => ({
		searchUsers: build.query<IUser[], string>({
			query: (search: string) => ({
				url: `search/users`,
				params: {
					q: search,
					per_page: 20,
				},
			}),
			transformResponse: (response: Response<IUser>) => response.items,
		}),
		getUserRepos: build.query<IRepo[], string>({
			query: (username: string) => ({
				url: `users/${username}/repos`,
			}),
		}),
	}),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = api;

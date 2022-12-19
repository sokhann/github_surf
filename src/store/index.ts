import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { api } from './api';
import { favoritesReducer } from './FavoritesStore';

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		favorites: favoritesReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export * from './api';
export * from './FavoritesStore';

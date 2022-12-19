import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRepo } from '../interfaces';

const FAVORITES_KEY = 'gh_surf';

interface favoritesState {
	favorites: IRepo[];
}

const initialState: favoritesState = {
	favorites: JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? '[]'),
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		add(state, action: PayloadAction<IRepo>) {
			state.favorites.push(action.payload);
			localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
		},
		remove(state, action: PayloadAction<number>) {
			state.favorites = state.favorites.filter(
				(item) => item.id !== action.payload
			);
			localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
		},
	},
});

export const favoritesActions = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

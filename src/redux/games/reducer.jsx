import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentGame: null,
  filter: ''
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  }
});

export const { setCurrentGame, setFilter } = gamesSlice.actions;
export default gamesSlice.reducer;
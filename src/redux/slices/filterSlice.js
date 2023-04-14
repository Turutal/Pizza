import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  sortType: {
    name: 'популярности',
    property: 'popularity',
  },
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setActiveCategory, setSortType, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;

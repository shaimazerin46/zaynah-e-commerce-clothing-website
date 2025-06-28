const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    category: 'null',
    sortBy: 'null',
    minPrice: '',
    maxPrice: ''
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory(state,action){
            state.category = action.payload
        },
        setSortBy(state,action){
            state.sortBy = action.payload
        },
        setMinPrice(state, action) {
           state.minPrice = action.payload;
        },
        setMaxPrice(state, action) {
           state.maxPrice = action.payload;
        }
    }

})

const filterReducer = filterSlice.reducer;
export const {setCategory, setSortBy, setMinPrice, setMaxPrice} = filterSlice.actions
export default filterReducer
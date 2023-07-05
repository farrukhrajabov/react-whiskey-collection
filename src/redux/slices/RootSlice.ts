import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: "Whiskey Make",
        model: "Whiskey Model",
        year: "Year",
        price: "Price",
    },
    reducers: {
        chooseBrand: (state, action) => { state.brand = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseModel, chooseYear, choosePrice } = rootSlice.actions
import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: "filter",
    initialState: {
        searchFilter: ""
    },
        reducers: {
            changeFilter : (state, action) => {
                state.searchFilter = action.payload;
            }
    }
})

export default slice.reducer;

export const { changeFilter } = slice.actions;
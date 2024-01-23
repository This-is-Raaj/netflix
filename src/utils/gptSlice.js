import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        gptToggle: false
    },
    reducers: {
        gptSearchToggle: (state, action) => {
            state.gptToggle = !state.gptToggle
        }
    }
})

export const { gptSearchToggle } = gptSlice.actions;

export default gptSlice.reducer;
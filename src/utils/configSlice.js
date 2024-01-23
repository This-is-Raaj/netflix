import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        selectLanguage: 'en'
    },
    reducers: {
        languageOptionsSelect: (state, action) => {
            state.selectLanguage = action.payload
        }
    }
})

export const { languageOptionsSelect } = configSlice.actions;
export default configSlice.reducer;
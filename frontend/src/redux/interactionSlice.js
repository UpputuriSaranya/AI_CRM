import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    extractedData: {}

};

const interactionSlice = createSlice({

    name: "interaction",

    initialState,

    reducers: {

        setInteraction(state, action){

            state.extractedData = action.payload;

        }

    }

});

export const {

    setInteraction

} = interactionSlice.actions;

export default interactionSlice.reducer;
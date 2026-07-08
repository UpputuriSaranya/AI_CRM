import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    messages:[
        {
            sender:"ai",
            text:"Hello 👋 I'm your AI CRM Assistant."
        }
    ]

};

const slice=createSlice({

    name:"chat",

    initialState,

    reducers:{

        addMessage(state,action){

            state.messages.push(action.payload);

        }

    }

});

export const {

    addMessage

}=slice.actions;

export default slice.reducer;
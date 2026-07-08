import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  status: "ready",

  loading: false

};

const agentSlice = createSlice({

  name: "agent",

  initialState,

  reducers: {

    startExtraction(state){

      state.loading = true;

      state.status = "extracting";

    },

    finishExtraction(state){

      state.loading = false;

      state.status = "completed";

    }

  }

});

export const {

  startExtraction,

  finishExtraction

} = agentSlice.actions;

export default agentSlice.reducer;
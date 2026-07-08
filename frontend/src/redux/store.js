import { configureStore } from "@reduxjs/toolkit";

import chatReducer from "./chatSlice";
import interactionReducer from "./interactionSlice";
import agentReducer from "./agentSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    interaction: interactionReducer,
    agent: agentReducer,
  },
});
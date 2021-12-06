import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import consoleLogger from "./middleware/logger";

import teamSlice from "./reducers/teamSlice";

export const store = configureStore({
  reducer: {
    team: teamSlice,
  },
  middleware: [thunk, consoleLogger],
});

export type State = ReturnType<typeof store.getState>;

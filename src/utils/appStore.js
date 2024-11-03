import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import feedSlice from "./feedSlice";

const appStore = configureStore({
  reducer: { user: userSlice, feeds: feedSlice },
});

export default appStore;

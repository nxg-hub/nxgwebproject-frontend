import RegisteredUsers from "./RegisteredUsers";
import PartialUser from "./PartialUsersSlice";
import ScholarshipUsers from "./ScholarshipSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  RegisteredUsers,
  PartialUser,
  ScholarshipUsers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;

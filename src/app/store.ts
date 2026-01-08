import {configureStore} from "@reduxjs/toolkit";
import user from "../features/user/userSlice";
import token from "../features/token/tokenSlice";
import type {UserProfile} from "../utils/types";

export const store = configureStore({
    reducer: {
        user, token
    },
    preloadedState: JSON.parse(localStorage.getItem('state') || '{}') as {token: string, user: UserProfile}
});

store.subscribe(() => localStorage.setItem("state", JSON.stringify(store.getState())));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
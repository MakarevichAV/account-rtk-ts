import {createAsyncThunk} from "@reduxjs/toolkit";
import {baseUrl, createToken} from "../../utils/constants.ts";
import type {UserData, UserProfile, UserRegister} from "../../utils/types";
import type {RootState} from "../../app/store.ts";

export const registerUser = createAsyncThunk(
    'user/register',
    async (user: UserRegister) => {
        const res = await fetch(`${baseUrl}/account/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        if (res.status === 409) {
            throw new Error(`Login ${user.login} already exists`)
        }
        if (!res.ok) {
            throw new Error(`Failed to register user: ${user.login}`)
        }
        const data = await res.json()
        const token = createToken(user.login, user.password)
        localStorage.setItem("token", token)
        localStorage.setItem("userData", JSON.stringify(data))
        return {
            user: data,
            token
        }
    }
)

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (token: string) => {
        const res = await fetch(`${baseUrl}/account/login`, {
            method: 'POST',
            headers: {
                Authorization: token
            }
        })
        if (res.status === 401) {
            throw new Error(`invalid credentials`)
        }
        if (!res.ok) {
            throw new Error(`Something went wrong`)
        }
        const data = await res.json()
        localStorage.setItem("token", token)
        localStorage.setItem("userData", JSON.stringify(data))
        return {
            user: data,
            token
        }
    }
)

type userUpdate = Omit<UserData, 'login'>
export const updateUser = createAsyncThunk<UserProfile, userUpdate, {state: RootState}>(
    'user/update',
    async (user, {getState}) => {
        const res = await fetch(`${baseUrl}/account/user/${getState().user.login}`, {
            method: 'PATCH',
            headers: {
                Authorization: `${getState().token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        if (res.status === 401) {
            throw new Error(`Unauthorized`)
        }
        if (!res.ok) {
            throw new Error(`Something went wrong`)
        }
        const data = await res.json()
        localStorage.setItem("userData", JSON.stringify(data))
        return data

    }
)

export const changePassword = createAsyncThunk<string, string, {state: RootState}>(
    'user/password',
    async (newPassword, {getState}) => {
        const res = await fetch(`${baseUrl}/account/password`, {
            method: 'PATCH',
            headers: {
                Authorization: `${getState().token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: newPassword
            })
        })
        if (res.status === 401) {
            throw new Error(`Unauthorized`)
        }
        if (!res.ok) {
            throw new Error(`Something went wrong`)
        }
        const token = createToken(getState().user.login, newPassword)
        localStorage.setItem("token", token)
        return token
    }
)
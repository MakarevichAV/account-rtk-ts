import { UPDATE_MODE_DEFAULT, UPDATE_MODE_EDIT_PROFILE, UPDATE_MODE_CHANGE_PASSWORD } from './constants';

export type UpdateMode = typeof UPDATE_MODE_DEFAULT | typeof UPDATE_MODE_EDIT_PROFILE | typeof UPDATE_MODE_CHANGE_PASSWORD;

export interface UserData {
    firstName: string;
    lastName: string;
    login: string;
}

export interface UserProfile extends UserData {
    roles: string[];
}

export interface UserRegister extends UserData{
    password: string;
}
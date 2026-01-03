export const UPDATE_MODE_DAFAULT = "UPDATE_MODE_DAFAULT";
export const UPDATE_MODE_CHANGE_PASSWORD = "UPDATE_MODE_CHANGE_PASSWORD";
export const UPDATE_MODE_EDIT_PROFILE = "UPDATE_MODE_EDIT_PROFILE";

export const baseUrl = 'https://webaccounting.herokuapp.com'
export const createToken = (login: string, password: string) => {
    return 'Basic ' + btoa(`${login}:${password}`)
}
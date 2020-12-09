import { api } from "./api";

const TOKEN_USER = "@user";

export const signIn = ( user ) => {
    localStorage.setItem(TOKEN_USER,JSON.stringify(user))
	api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
};

export const signOut = () => {
    localStorage.clear();

    api.defaults.headers.common['Authorization'] = undefined;
}

export const getUsers = () => {
    const {user} = JSON.parse(localStorage.getItem(TOKEN_USER));

    return user;
}

export const isSignedIn = () => {
    const user = JSON.parse(localStorage.getItem(TOKEN_USER));

    if (user) {
        api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    }

    return user ? true : false;
}
export const TOKEN_KEY = "@museuVirtual-Token";
export const USER_ID = "@museuVirtual-UserId";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const UserLogado = () => sessionStorage.getItem(USER_ID);
export const loginn = (token) => {
    sessionStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_ID);
};
export const userId = (user) => {
    sessionStorage.setItem(USER_ID, user);
};

//https://pt-br.reactjs.org/docs/context.html
//se quiser passar algo so ver ai
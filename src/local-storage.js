export const loadAuthToken = () => {
    return localStorage.getItem('token');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('token', token);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('token');
    } catch (e) {}
};

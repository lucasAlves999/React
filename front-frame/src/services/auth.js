export const auth = {
  setToken: (token) => {
    localStorage.setItem('jwtToken', token);
  },

  getToken: () => {
    return localStorage.getItem('jwtToken');
  },

  removeToken: () => {
    localStorage.removeItem('jwtToken');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('jwtToken');
  },
};

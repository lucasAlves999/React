const API_BASE_URL = 'http://127.0.0.1:5000/';

export const api = {
  get: async (endpoint, token = null) => {
    const headers = {};
    if (token) headers['Authorization'] = Bearer ${token};

    const response = await fetch(${API_BASE_URL}${endpoint}, { headers });
    return response.json();
  },

  post: async (endpoint, data, token = null) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    if (token) headers['Authorization'] = Bearer ${token};

    const response = await fetch(${API_BASE_URL}${endpoint}, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return response.json();
  },

  put: async (endpoint, data, token = null) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    if (token) headers['Authorization'] = Bearer ${token};

    const response = await fetch(${API_BASE_URL}${endpoint}, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    });
    return response.json();
  },

  delete: async (endpoint, token = null) => {
    const headers = {};
    if (token) headers['Authorization'] = Bearer ${token};

    const response = await fetch(${API_BASE_URL}${endpoint}, {
      method: 'DELETE',
      headers,
    });
    return response.json();
  },
};
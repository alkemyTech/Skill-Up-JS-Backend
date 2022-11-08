import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    }
  });
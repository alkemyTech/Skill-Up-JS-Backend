import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        accept: 
        "/", //acá le digo que acepte todas las solicitudes
        "Content-Type": "application/json", //que acepte json
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    }
  });
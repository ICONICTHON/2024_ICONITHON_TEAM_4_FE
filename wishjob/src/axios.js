import axios from 'axios';

const api = axios.create({
    baseURL: 'https://port-0-backend-m3ffo7y635cd1bb2.sel4.cloudtype.app/',  
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;
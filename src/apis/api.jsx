
import axios from 'axios';
var API_URL = import.meta.env.VITE_API_URL;

export const Registration = async(data) => {
    try {
        console.log(data);
        const response = await axios.post(`${API_URL}/auth/register`, data);
        if(response.status === 200 && response.data.status === 1){
            return response.data;
        }
    } catch (error) {
        console.log(error);
        return error.response.data;
    }
}

export const Society = async() => {
    const response = await axios.get(`${API_URL}/society/getSociety`);
    if(response.status === 200 && response.data.status === 1){
        return response.data.data;
    }
    return [];
}

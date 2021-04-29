import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:9000',
    headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
    },

})

export const getAllHippos = () => api.get(`/hippo`);
export const getHippoById = (id) => api.get(`/hippo/${id}`);
export const getAllTests = () => api.get(`/testresult`);
export const getTestById = (id) => api.get(`/testresult/${id}`);


const apis = {
    getAllHippos,
    getTestById,
    getAllTests,
    getHippoById
}

export default apis;
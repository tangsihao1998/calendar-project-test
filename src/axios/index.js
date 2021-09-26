import axios from 'axios';
import { AXIOS_BASEURL } from 'constants/jsFile/urls';

const axiosInstance = axios.create({
    baseURL: AXIOS_BASEURL
});

axiosInstance.interceptors.request.use(config => {
    return config;
});

export default {
    axiosInstance
};
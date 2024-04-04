import { apiURL } from './constants';
import axios from 'axios';

const axiosApi = axios.create({
    baseURL: apiURL,
});

export default axiosApi
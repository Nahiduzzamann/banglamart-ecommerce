import axios from "axios";
const url = "http://62.72.31.204:1300";

export const postApi = async (route, data, token) => axios.post(`${url}${route}`, data, { headers: { Authorization: `Bearer ${token}` }, });
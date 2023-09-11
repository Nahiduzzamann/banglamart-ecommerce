import axios from "axios";
const url = "http://62.72.31.204:1300";

export const postApi = async (route, data, token) =>
    axios.post(
        `${url}${route}`,
        data,
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );


export const getApi = async (route, token) =>
    axios.get(
        `${url}${route}`,
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );

export const putApi = async (route, data, token) =>
    axios.put(
        `${url}${route}`,
        data,
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );

export const deleteApi = async (route, token) =>
    axios.delete(
        `${url}${route}`,
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );
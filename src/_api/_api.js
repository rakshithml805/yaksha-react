import axios from "axios";
import { baseURL } from "./_urls";
import store from "../_store/store";
import { handleResponse } from "../_store/reducer/responseMessages";

// This is for authorized routes
const axiosApi = axios.create({
    baseURL,
})
const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
};
axiosApi.interceptors.request.use(
    function (config) {
        // add loader
        const accessToken = sessionStorage.getItem("accessToken");
        const sessionToken = sessionStorage.getItem("sessionToken");
        if (accessToken && accessToken !== "undefined" && accessToken !== null && accessToken !== undefined) {
            if (config.headers) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        }
        if (sessionToken && sessionToken !== "undefined" && sessionToken !== null && sessionToken !== undefined) {
            if (config.headers) {
                config.headers[`X-Session`] = `Bearer ${sessionToken}`;
            }
        }
        document.body.classList.add('loading-indicator');        
        return config
    },
)
axiosApi.interceptors.response.use(
    function (response) {
        // remove loader
        document.body.classList.remove('loading-indicator');
        return response;
    },
    function (error) {
        document.body.classList.remove('loading-indicator');
        if (!error.response || error.response.status === 401) {
            handleLogout()
            return Promise.reject(error)
        } else {
            return Promise.reject(error)
        }
    }
)

export const getApi = async (url) => {
    try {
        const result = await axiosApi.get(`${url}`, {
            headers: {
                "ngrok-skip-browser-warning":"any"
            }
        });
        return {
            status: result.status, body: result.data 
        }
    }
    catch (err) {
        console.log(err);
        const body = err?.response?.data ? err?.response?.data : 'Failed to connect';
        const status = err?.response?.status ? err?.response?.status : 500;
        return { status, body }
    }
}
export const getApiForDownload = async (url) => {
    try {
        const result = await axiosApi.get(`${url}`, {
            responseType: "blob"
          }
        );
        return {
            status: result.status, body: result.data 
        }
    }
    catch (err) {
        console.log(err);
        const body = err?.response?.data ? err?.response?.data : 'Failed to connect';
        const status = err?.response?.status ? err?.response?.status : 500;
        return { status, body }
    }
}


export const getByIdApi = async (url, id) => {
    try {
        const result = await axiosApi.get(`${url}?id=${id}`);
        return {
            status: result.status, body: result.data   
        }
    }
    catch (err) {
        const body = err?.response?.data ? err?.response?.data : 'Failed to connect';
        const status = err?.response?.status ? err?.response?.status : 500;
        return { status, body }
    }
}

export const putApi = async (url , request) => {
    try {
        const result = await axiosApi.put(`${url}`, request );
        if (result.status >= 400 && result.status <= 599) {
            store.dispatch(handleResponse({ status: result.status, msg: "Something Went Wrong!!", isEnabled: true, type: "error"}));
        }
        return {
            status: result.status, body: result.data   
        }
    }
    catch (err) {
        const body = err?.response?.data ? err?.response?.data : 'Failed to connect';
        const status = err?.response?.status ? err?.response?.status : 500;
        store.dispatch(handleResponse({ status: 500, msg: "Something Went Wrong!!", isEnabled: true, type: "error"}));
        return { status, body }
    }
}

export const putApiFormData = async (url , request, id) => {
    try {
        const result = await axiosApi.put(`${url}/${id}`, request );
        if (result.status >= 400 && result.status <= 599) {
            store.dispatch(handleResponse({ status: result.status, msg: "Something Went Wrong!!", isEnabled: true, type: "error"}));
        }
        return {
            status: result.status, body: result.data   
        }
    }
    catch (err) {
        const body = err?.response?.data ? err?.response?.data : 'Failed to connect';
        const status = err?.response?.status ? err?.response?.status : 500;
        store.dispatch(handleResponse({ status: 500, msg: "Something Went Wrong!!", isEnabled: true, type: "error"}));
        return { status, body }
    }
}

export const deleteApi = async (url, id) => {
    try {
        const result = await axiosApi.delete(`${url}/${id}`);
        if (result.status >= 400 && result.status <= 599) {
            store.dispatch(handleResponse({ status: result.status, msg: "Something Went Wrong!!", isEnabled: true, type: "error"}));
        }
        return {
            status: result.status, body: result.data   
        }
    }
    catch (err) {
        const body = err?.response?.data ? err?.response?.data : 'Failed to connect';
        store.dispatch(handleResponse({ status: 500, msg: "Something Went Wrong!!", isEnabled: true, type: "error"}));
        return { status: body.status ? body.status : 500, body }
    }
}

export const postApi = async (url, request) => {
    try {
        const result = await axiosApi.post(`${url}`, request);
        if (!result) {
            return
        }
        if (result.status >= 400 && result.status <= 599) {
            store.dispatch(handleResponse({ status: result.status, msg: "Something Went Wrong!!", isEnabled: true, type: "error"}));
        }
        return {
            status: result.status, body: result.data
        }
    }
    catch (err) {
        const resp = err.response;
        const body = resp.data?.Message ? resp.data?.Message : 'Failed to connect';
        store.dispatch(handleResponse({ status: 500, msg:err.response.status === 409 ? "Email ID is already exist!" : err.response.status === 403 ? "You don't have access" : "Something Went Wrong!!", isEnabled: true, type: "error"}));        
        return { status: resp.status, body }
    }
}

export const patchApi = async (url, request) => {
    try {
        const result = await axiosApi.patch(`${url}`, request);
        if (!result) {
            return
        }
        if (result.status >= 400 && result.status <= 599) {
            store.dispatch(handleResponse({ status: result.status, msg: "Something Went Wrong!!", isEnabled: true, type: "error"}));
        }
        return {
            status: result.status, body: result.data
        }
    }
    catch (err) {
        const resp = err.response;
        const body = resp.data ? resp.data : 'Failed to connect';
        store.dispatch(handleResponse({ status: 500, msg: "Something Went Wrong!!", isEnabled: true, type: "error"}));        
        return { status: resp.status, body }
    }
}

export { axiosApi }
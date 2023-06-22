import axios from "axios";
import {baseMyBackendURL} from "../constants";
import {authService} from "./auth.service";

const axiosMyBackendService = axios.create({baseURL: baseMyBackendURL});

axiosMyBackendService.interceptors.request.use(req => {
    const accessToken = authService.getAccessToken();

    if (accessToken) {
        req.headers.Authorization = accessToken;
    }

    return req;
});

export {
    axiosMyBackendService,
};


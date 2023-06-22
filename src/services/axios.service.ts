import axios from "axios";
import {baseMyBackendURL} from "../constants";

const axiosMyBackendService = axios.create({baseURL: baseMyBackendURL});

export {
    axiosMyBackendService,
};


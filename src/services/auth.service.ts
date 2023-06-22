import {IAuth} from "../interfaces";
import {AxiosResponse} from "axios";
import {axiosMyBackendService} from "./axios.service";
import {endpoints} from "../constants";

class AuthService {
    register(user: IAuth): Promise<AxiosResponse<void>> {
        return axiosMyBackendService.post(endpoints.register, user);
    }
}

export const authService = new AuthService();
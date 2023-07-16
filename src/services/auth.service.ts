import {AxiosResponse} from "axios";
import jwtDecode from "jwt-decode";

import {axiosMyBackendService} from "./axios.service";
import {authEndpoints} from "../constants";
import {ILogin} from "../types";
import {IRegister} from "../interfaces";
import {ITokens} from "../interfaces";
import {IDecoded} from "../interfaces";
import {IMe} from "../interfaces";

class AuthService {

    private readonly accessKey = 'access';
    private readonly refreshKey = 'refresh';

    async register(user: IRegister): Promise<AxiosResponse<void>> {
        return axiosMyBackendService.post(authEndpoints.register, user);
    }

    async login(user: ILogin): Promise<IMe> {
        const {data} = await axiosMyBackendService.post(authEndpoints.login, user);
        this.setTokens(data);
        const {_id}:IDecoded = jwtDecode(data.accessToken);
        const {data: me}: AxiosResponse<IMe> = await this.me(_id);
        return me;
    }

    async me(id: string): Promise<AxiosResponse<IMe>> {
        return axiosMyBackendService.get(`${authEndpoints.users}/${id}`);
    }

    private setTokens({accessToken, refreshToken}: ITokens): void {
        localStorage.setItem(this.accessKey, accessToken);
        localStorage.setItem(this.refreshKey, refreshToken);
    }

    getAccessToken():string{
        return localStorage.getItem(this.accessKey);
    }

    removeTokens(): void {
        localStorage.removeItem(this.accessKey);
        localStorage.removeItem(this.refreshKey);
    }


}

export const authService = new AuthService();
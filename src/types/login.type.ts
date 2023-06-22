import {IRegister} from "../interfaces";


export type ILogin = Omit<IRegister, 'name'>;

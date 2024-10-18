import { IPerson } from "./IPerson.interface";

export interface IAdministrator extends IPerson{
    password: string,
    username: string,
    rol: string
}


export interface IAdministratorCreate extends Omit<IPerson, "id">{
    
}
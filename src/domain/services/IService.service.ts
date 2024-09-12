import { IService, IServiceCreate } from "../interfaces/IService.interface";


export interface IServiceService{
    create: (person:IServiceCreate ) => Promise<IService>;
    get: (id: IService['id']) => Promise<IService>;
}
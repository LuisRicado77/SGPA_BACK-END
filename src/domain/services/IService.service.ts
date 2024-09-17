import { IService, IServiceCreate } from "../interfaces/IService.interface";


export interface IServiceService{
    create: (service:IServiceCreate ) => Promise<IService>;
    get: (id: IService['id']) => Promise<IService>;
    delete: (id:IService['id']) => Promise<null>;
    update:(service: IServiceCreate) => Promise<IService>
}
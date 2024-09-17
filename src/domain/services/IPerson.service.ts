//names 

import { IPerson, IPersonCreate } from "../interfaces/IPerson.interface";
import { IService } from "../interfaces/IService.interface";


export interface IPersonService{
    create: (person:IPersonCreate ) => Promise<IPerson>;
    get: (id: IPerson['id']) => Promise<IPerson>;
    delete: (id:IPerson['id']) => Promise<void>;
    update:(service: IPersonCreate) => Promise<IService>
}
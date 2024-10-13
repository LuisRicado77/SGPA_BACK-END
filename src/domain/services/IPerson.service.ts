//names 

import { IPerson, IPersonCreate } from "../interfaces/IPerson.interface";



export interface IPersonService{
    create: (person:IPersonCreate ) => Promise<IPerson>;
    getById: (id: IPerson['id']) => Promise<IPerson>;
    getAll:() => Promise<IPerson[]>
    delete: (id:IPerson['id']) => Promise<void>;
    update:(service: IPersonCreate) => Promise<IPerson>
}
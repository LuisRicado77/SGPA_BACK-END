//names 

import { IPerson, IPersonCreate } from "../interfaces/IPerson.interface";


export interface IPersonService{
    create: (person:IPersonCreate ) => Promise<IPerson>;
    get: (id: IPerson['id']) => Promise<IPerson>;
}
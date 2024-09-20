import { IAct, IActCreate } from "../interfaces/IAct.interface";

export interface IActService {
    create: (act: IActCreate) => Promise<IAct>;
    get: (id: IAct['id']) => Promise<IAct>
    delete: (id: IAct['id']) => Promise<void>;
    update: (act: IActCreate) => Promise<IAct>;
}
import { NotCreateError } from "../domain/errors/NotCreateError";
import { IPerson, IPersonCreate } from "../domain/interfaces/IPerson.interface";
import { IPersonService } from "../domain/services/IPerson.service";

export class registerPerson{

    constructor(private readonly personSrv: IPersonService){

    }

   async register(person: IPersonCreate): Promise<IPerson>{
        try {
            const newPerson = await this.personSrv.create(person);
            return newPerson;
        } catch (error) {
            throw error || new NotCreateError("Could not create a new user");
        }
    }
}
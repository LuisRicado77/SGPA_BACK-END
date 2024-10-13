import { NotCreatedError } from "../domain/errors/NotCreatedError";
import { IPerson, IPersonCreate } from "../domain/interfaces/IPerson.interface";
import { IPersonService } from "../domain/services/IPerson.service";

export class registerPerson{

    constructor(private readonly personSrv: IPersonService){

    }

   async add(person: IPersonCreate): Promise<IPerson>{
        try {
            const newPerson = await this.personSrv.create(person);
            return newPerson;
        } catch (error) {
            throw error || new NotCreatedError();
        }
    }
}
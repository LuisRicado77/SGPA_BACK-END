import { NotCreateError } from "../domain/errors/NotCreateError";
import { IPerson } from "../domain/interfaces/IPerson.interface";
import { IPersonService } from "../domain/services/IPerson.service";

export class registerPerson{

    constructor(private readonly personSrv: IPersonService){

    }

   async register(person: IPerson){
        try {
            const newPerson = await this.personSrv.create(person);
        } catch (error) {
            throw new NotCreateError("Could not create a new user");
        }
    }
}
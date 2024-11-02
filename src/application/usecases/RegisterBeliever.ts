import { NotCreatedError } from "../../domain/errors/NotCreatedError";
import { IPerson,IPersonCreate } from "../../domain/interfaces/IPerson.interface";
import { IAdministratorService } from "../../domain/services/IAdministrator.service";

export class RegisterBeliever {
    constructor(private readonly personSrv: IAdministratorService){

    }
    async register(person: IPersonCreate){
        try {
            const newPerson = await this.personSrv.addPerson(person);
            return newPerson;
        } catch (error) {
            throw Error || new NotCreatedError();
        }
    }
}
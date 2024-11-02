import { IPerson, IPersonCreate } from "../../domain/interfaces/IPerson.interface";
import { IAdministratorService } from "../../domain/services/IAdministrator.service";
import { NotCreatedError } from "../../domain/errors/NotCreatedError";


export class UpdateBeliever {
    constructor(private readonly personSrv : IAdministratorService){

    }

    async update(id: string, person: IPerson){
        try {
            const updatePerson = await this.personSrv.updatePerson(id, person);
        } catch (error) {
            throw error || new NotCreatedError();
        }
    }
}
import { IAdministratorService } from "../../domain/services/IAdministrator.service";
import { NotFoundError } from '../../domain/errors/NotFoundError';


export class findBeliever{
    constructor(private readonly personSrv: IAdministratorService){}


    async find(id: string){
        try{
            const person = await this.personSrv.getPerson(id)
            return person;
        }catch(error){
            throw error || new NotFoundError();
        }
    }
}
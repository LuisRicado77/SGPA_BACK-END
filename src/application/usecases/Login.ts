import { UnauthorizedAccess } from "../../domain/errors/UnathorizedAccess";
import { IAdministrator,IAdministratorCreate } from "../../domain/interfaces/IAdministrator.interface";
import { IAdministratorService } from "../../domain/services/IAdministrator.service";


export class Login{
    constructor(private readonly administratorSrv: IAdministratorService){

    }

    async login(password: string, email: string){
        try {
            const access = await this.administratorSrv.login(password, email);    
        } catch (error) {
            throw error || new UnauthorizedAccess();
        }
        
    }
}
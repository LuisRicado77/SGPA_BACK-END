import { IAct } from "../../domain/interfaces/IAct.interface";
import { IPerson,IPersonCreate } from "../../domain/interfaces/IPerson.interface";
import { IAdministrator } from "../../domain/interfaces/IAdministrator.interface";
import { IService } from "../../domain/interfaces/IService.interface";
import { NotCreatedError } from '../../domain/errors/NotCreatedError';
import { IAdministratorService } from '../../domain/services/IAdministrator.service';


class AdminManagement {
    constructor(
        private readonly adminSrv: IAdministratorService
    ){}



    
}

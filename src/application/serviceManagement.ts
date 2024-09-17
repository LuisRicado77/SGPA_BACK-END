import { NotCreateError } from "../domain/errors/NotCreateError";
import { IService,IServiceCreate } from '../domain/interfaces/IService.interface';
import { IServiceService } from '../domain/services/IService.service';


export class addService{
    constructor(private readonly serviceSrc: IServiceService){

    }

    async add(service: IServiceCreate): Promise<IService>{
        try {
            const newService = await this.serviceSrc.create(service);
            return newService;  
        } catch (error) {
            throw error || new NotCreateError("Could not create a new user")
        }
        
    }
}
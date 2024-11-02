
import { IAdministrator,IAdministratorCreate } from "../interfaces/IAdministrator.interface";
import { IPerson, IPersonCreate } from '../interfaces/IPerson.interface';
import { IAct } from '../interfaces/IAct.interface';
import { IService } from "../interfaces/IService.interface";

export interface IAdministratorService{
    login:                  (password: IAdministrator['password'], username: IAdministrator['username'])=>Promise<void>;
    changePassword:         (oldPassword: IAdministrator['password'],newPassword: IAdministrator['password'] )=> Promise<void>

    //create
    addAdministrator:       (admin:IAdministratorCreate)=> Promise<void>;
    addPerson:              (person:IPersonCreate)=>Promise<void>;
    addAct:                 (act: IAct)=>Promise<void>;
    addService:             (service:IService) =>Promise<void>;

    //read
    getAdministrator:       (id:IPerson["id"])=>Promise<IAdministrator>
    getAllAdministrators:   ()=>Promise<IAdministrator[]>
    getPerson:              (id: IPerson["id"])=>Promise<IPerson>
    getAllPeople:           ()=>Promise<IPerson[]>
    getAct:                 (id:IAct)=>Promise<IAct>
    getAllActs:             ()=>Promise<IAct[]>
    getService:             (id:IService['id'])=>Promise<IService>
    getAllByWaterBaptize:   ()=>Promise<IPerson[]>
    getAllByHolySpirit:     ()=>Promise<IPerson[]>
    getAllByCouple:         ()=>Promise<IPerson[]>
    getAllByTraslate:       ()=>Promise<IPerson[]>
    getAllYoungPeople:      ()=>Promise<IPerson[]>
    getAllGentlemen:        ()=>Promise<IPerson[]>
    getAllMaidens:          ()=>Promise<IPerson[]>
    getAllAdults:           ()=>Promise<IPerson[]>
    getAllSingles:          ()=>Promise<IPerson[]>
    getAllMerried:          ()=>Promise<IPerson[]>
    getAllChildrenActs:     ()=>Promise<IAct[]>




    //update
    updateAdministrator:    (id: IPerson["id"],admin:IAdministrator)=>Promise<void>
    updatePerson:           (id:IPerson['id'],person:IPerson)=>Promise<void>
    updateAct:              (id:IAct["id"], act:IAct)=>Promise<void>
    updateService:          (id:IService["id"], service:IService)=>Promise<void>


    //delete
    deleteAdministrator:    (id:IPerson["id"])=>Promise<void>
    deletePerson:           (id:IPerson["id"])=>Promise<void>
    deleteAct:              (id:IAct['id'])=>Promise<void>
    deleteService:          (id:IService)=>Promise<void>
    
}
import { IAct } from "../interfaces/IAct.interface";
import { IAdminCreate,IAdmin } from "../interfaces/IAdmin.interface";
import { IPersonCreate,IPerson } from "../interfaces/IPerson.interface";
import { IService, IServiceCreate } from "../interfaces/IService.interface";

export interface IAdminService{
    login:(password: IAdmin['password'], username: IAdmin['username'])=>Promise<string>;
    //create
    addPerson:(person: IPersonCreate)=> Promise<IPerson>;
    addAdmin:(admin: IAdminCreate)=> Promise<IAdminCreate>;
    addService:(service: IServiceCreate) =>Promise<IPerson>;
    addAct:(act:IAct)=>Promise<IAct>;
    //read
    getPerson:(id: IPerson['id'])=>Promise<IPerson>;
    getAdmin:(id: IPerson['id'])=>Promise<IAdmin>;
    getByPeopleCategory:()=>Promise<IPerson[]>
    getByCouple:()=>Promise<IPerson[]>;
    getByBautized:()=>Promise<IPerson[]>;
    getActByPresentations:()=>Promise<IAct[]>;
    getPersonBytraslate:()=>Promise<IPerson[]>;

    //update
    updatePerson:(id: IPerson['id'], person:IPerson)=>Promise<IPerson>;
    updateAdmin:()
    updateAct()
    updateService()

    //delete
    deleteAct
    deletePerson
    deleteService
    deleteAdmin







}
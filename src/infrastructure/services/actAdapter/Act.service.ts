import { v4 } from "uuid";
import { IAct, IActCreate } from "../../../domain/interfaces/IAct.interface";
import { IActService } from "../../../domain/services/IAct.service";
import { NotFoundError } from "../../../domain/errors/NotFoundError";

export class ActService implements IActService{

    private acts: IAct[] = [];

    async create(act: IActCreate): Promise<IAct>{
        const newAct: IAct= {
            id: v4(),

            ...act
        }
        this.acts.push(newAct);
        return newAct;

    }
    async get(id: IAct["id"]): Promise<IAct>{
        const act = this.acts.find((act) => act.id === id)
        if(!act){
            throw new NotFoundError("Could not found an Act")
            
        }
        return act;
    }
    async delete(id:IAct['id']):  Promise<void>{

    }

    async update(act: IActCreate): Promise<IAct>{
        return 
    }
    
}
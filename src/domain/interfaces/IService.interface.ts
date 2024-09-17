export interface IService{
    
    id: string,
    ServiceType: string,
    NumberMis: number,
    NumberChildren: number,
    NumberYoung: number,
    NumberMan: number,
    NumberElderlyPeople:number,
    NumberVisits: number,
    date: Date,
    offering: string,
    topic: string,
    preacher: string,
    CommitteeInCharge: string
}

export interface IServiceCreate extends Omit<IService,'id'>{

}
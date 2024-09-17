

export interface IAct{
    id: string,
    ActType: string,
    MotherName: string,
    FatherName: string,
    ActName: string,
}

export interface IActCreate extends Omit<IAct,'id'> {

}
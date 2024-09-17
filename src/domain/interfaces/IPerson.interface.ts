//interface = contract

export interface IPerson{
    id: string,
    name: string,
    lastName: string,
    email: string
    picture: string,
    documentType: string,
    whyInactivity: string,
    age: number,
    country: string,
    city: string,
    zipCode: string,
    neighborhood: string,
    street: string
}
 //with this "extends Omit<IPerson,"id">"  we can take the other interface to use her atributes but without id 

export interface IPersonCreate extends IPerson{
    
}
export class NotCreateError extends Error{
    constructor(message?: string){
        super(message ||  "Error at creating resources");
    }
}
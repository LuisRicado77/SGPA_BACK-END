export class NotSendNotificationError extends Error{
    constructor(message?: string){
        super(message ||  "Error at sending notification");
    }
}
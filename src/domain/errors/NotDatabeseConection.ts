import { ERROR_MESSAGE } from "./Messages";

export class NotSendNotificationError extends Error {
    constructor() {
        super(ERROR_MESSAGE.DATABASE_CONNECTION_FAILED);
    }
}
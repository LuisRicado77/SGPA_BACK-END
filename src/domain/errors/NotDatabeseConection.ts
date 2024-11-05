import { ERROR_MESSAGE } from "./Messages";

export class NotDatabaseConection extends Error {
    constructor() {
        super(ERROR_MESSAGE.DATABASE_CONNECTION_FAILED);
    }
}
import { ERROR_MESSAGE } from "./Messages";

export class UnauthorizedAccess extends Error {
    constructor() {
        super(ERROR_MESSAGE.UNAUTHORIZED_ACCESS);
    }
}
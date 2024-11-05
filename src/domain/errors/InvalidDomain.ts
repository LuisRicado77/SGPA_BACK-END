import { ERROR_MESSAGE } from "./Messages";

export class InvalidDomain extends Error {
    constructor() {
        super(ERROR_MESSAGE.INVALID_DOMAIN_STATE);
    }
}
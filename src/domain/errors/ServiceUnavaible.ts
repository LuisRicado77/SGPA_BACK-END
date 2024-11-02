import { ERROR_MESSAGE } from "./Messages";

export class ServiceUnavaible extends Error {
    constructor() {
        super(ERROR_MESSAGE.SERVICE_UNAVAILABLE);
    }
}
import { ERROR_MESSAGE } from "./Messages";

export class InvalidInput extends Error {
    constructor() {
        super(ERROR_MESSAGE.INVALID_INPUT);
    }
}
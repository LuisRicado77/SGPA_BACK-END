import { ERROR_MESSAGE } from "./Messages";

export class BusinessRuleViolation extends Error {
    constructor() {
        super(ERROR_MESSAGE.BUSINESS_RULE_VIOLATION);
    }
}
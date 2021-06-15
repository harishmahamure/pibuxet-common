import { CustomError } from "./customErr";

export class NotAuthorisedError extends CustomError {
    statusCode = 401;
    constructor() {
        super("not authorised");

        Object.setPrototypeOf(this, NotAuthorisedError.prototype);
    }

    serializeErrors() {
        return [
            {
                message: "Not authorised",
            },
        ];
    }
}

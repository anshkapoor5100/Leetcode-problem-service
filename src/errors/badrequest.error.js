const BaseError = require("./base.error");
const {StatusCodes} = require("http-status-codes");

class BadRequest extends BaseError{
    constructor(propertyName,details){
        super("Bad Request", StatusCodes.BAD_REQUEST, `Invalid request for ${propertyName} provided`, details);
        this.propertyName = propertyName;
    }
}
module.exports = BadRequest;
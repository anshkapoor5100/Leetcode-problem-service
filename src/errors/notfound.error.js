const BaseError = require("./base.error");
const {StatusCodes} = require("http-status-codes");

class NotFound extends BaseError{
    constructor(resourceName,resourceValue){
        super("Not Found", StatusCodes.NOT_FOUND, `Invalid request for ${resourceName} provided with value ${resourceValue} not found`, {});
        this.resourceName = resourceName;
        this.resourceValue = resourceValue;
    }
}
module.exports = NotFound;
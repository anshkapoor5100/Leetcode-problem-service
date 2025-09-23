const BaseError = require("./base.error");
const {StatusCodes} = require("http-status-codes");

class NotImplemented extends BaseError{
    constructor(methodName){
        super("Not Implemented", StatusCodes.NOT_IMPLEMENTED, `The method ${methodName} is not implemented`, {});
    }
}
module.exports = NotImplemented;
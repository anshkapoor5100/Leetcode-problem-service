class BaseError extends Error{
    constructor(name, statusCode, description, details){
        super(description);
        this.statusCode = statusCode;
        this.name = name;
        this.details = details;
    }
}

module.exports = BaseError;
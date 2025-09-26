const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notimplemented.error");
const { ProblemRepository } = require("../repositories");
const { ProblemService } = require("../services");

function pingProblemChecker(req, res) {
    console.log("Pinged Problem Controller");
    return res.json({ message: 'Ping controller is up' } );
}
const problemService = new ProblemService(new ProblemRepository());

async function addProblem(req, res,next) {
    try{
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            succcess: true,
            message: "Successfully created the problem",
            data: newProblem,
            error: {}
        }); 
    }
    catch(err){
        next(err);
    }
}
function getProblem(req, res) {
    try{
        throw new NotImplemented("addProblem" );
    }
    catch(err){
        next(err);
    }
}
async function getProblems(req, res,next) {
    try{
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            succcess: true,
            message: "Successfully fetched all problems",
            data: response,
            error: {}
        });    
    }
    catch(err){
        next(err);
    }
}
function deleteProblem(req, res) {
    try{
        throw new NotImplemented("addProblem" );
    }
    catch(err){
        next(err);
    }
}
function updateProblem(req, res) {
    try{
        throw new NotImplemented("addProblem" );
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemChecker,
};
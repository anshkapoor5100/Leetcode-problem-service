const NotImplemented = require("../errors/notimplemented.error");

function pingProblemChecker(req, res) {
    console.log("Pinged Problem Controller");
    return res.json({ message: 'Ping controller is up' } );
}


function addProblem(req, res,next) {
    try{
        throw new NotImplemented("addProblem" );
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
function getProblems(req, res) {
    try{
        throw new NotImplemented("addProblem" );
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
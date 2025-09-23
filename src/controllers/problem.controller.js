const NotImplemented = require("../errors/notimplemented.error");

function pingProblemChecker(req, res) {
    console.log("Pinged Problem Controller");
    return res.json({ message: 'Ping controller is up' } );
}


function addProblem(req, res,next) {
    try{

    }
    catch(err){
        throw new NotImplemented("addProblem" );
    }
}
function getProblem(req, res) {
    
}
function getProblems(req, res) {
    
}
function deleteProblem(req, res) {
    
}
function updateProblem(req, res) {
    
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemChecker,
};
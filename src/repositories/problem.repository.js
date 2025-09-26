const logger = require("../config/logger.config");
const NotFound = require("../errors/notfound.error");
const { Problem } = require("../models");

class ProblemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create(problemData);
            return problem;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find({});
            return problems;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
    async getProblemById(id) {
        try {
            const problem = await Problem.findById(id);
            if(!problem){
                throw new NotFound("Problem",id);
            }
            return problem;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
    async deleteProblem(id) {
        try {
            const deletedProblem = await Problem.findByIdAndDelete(id);
            if(!deletedProblem) {
                logger.error(`Problem with id ${id} not found for deletion`);
                throw new NotFound("problem", id);
            }
            return deletedProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
} 
module.exports = ProblemRepository; 
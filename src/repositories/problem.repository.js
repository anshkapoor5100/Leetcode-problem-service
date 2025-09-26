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
} 
module.exports = ProblemRepository; 
const { markdownSanitizer } = require("../utils"); // markdownSanitizer is an object { sanitizeMarkdown: [Function] }

class ProblemService{
    constructor(ProblemRepository){
        this.problemRepository = ProblemRepository;
    }

    async createProblem(problemData) {
        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }

    async getAllProblems() {
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }
    async getProblemById(id) {
        const problem = await this.problemRepository.getProblemById(id);
        return problem;
    }
    async deleteProblem(problemId) {
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }
}
module.exports = ProblemService;
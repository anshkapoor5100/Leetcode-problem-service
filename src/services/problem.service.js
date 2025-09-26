const { markdownSanitizer } = require("../utils");

class ProblemService{
    constructor(ProblemRepository){
        this.problemRepository = ProblemRepository;
    }

    async createProblem(problemData) {
        problemData.description = markdownSanitizer(problemData.description);
        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }

    async getAllProblems() {
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }
}

module.exports = {
    ProblemService: ProblemService,
}
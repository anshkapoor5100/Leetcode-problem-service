const { markdownSanitizer } = require("../utils");

class ProblemService{
    constructor(ProblemRepository){
        this.problemRepository = ProblemRepository;
    }

    async createProblem(problemData) {
        try{
            problemData.description = markdownSanitizer(problemData.description);
            const problem = await this.problemRepository.createProblem(problemData);
            return problem;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
}

module.exports = {
    ProblemService: ProblemService,
}
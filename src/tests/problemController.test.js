const { StatusCodes } = require("http-status-codes");
const { ProblemController } = require("../controllers");
const ProblemService = require("../services/problem.service");
const NotFound = require("../errors/notfound.error");
jest.mock("../services/problem.service");
describe("tests", function(){
    beforeEach(function(){
        req = {};
        res ={
            status:jest.fn(()=>res),
            json: jest.fn()
        }
        next = jest.fn();
    });
    test("should get all problems", async function(){
        const problems = [];
        ProblemService.prototype.getAllProblems.mockResolvedValue(problems);
        await ProblemController.getProblems(req,res,next);
        expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
        expect(ProblemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
        expect(next).not.toHaveBeenCalled();
        
    });
    test("should get a problem", async function(){
        const mockError = new Error("id", 10);
        ProblemService.prototype.getProblemById.mockRejectedValue(mockError);
        req.params={id:10};
        await ProblemController.getProblem(req,res,next);
        expect(next).toHaveBeenCalledWith(mockError);
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    });
    
})
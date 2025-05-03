import { T } from "../libs/types/common";
import MemberService from "../services/Member.service";
import { Request, Response } from "express";



const memberService = new MemberService();
const memberController: T={}



memberController.getAllAdmin= async (req:Request , res:Response) => {
    try{
        
    }
    catch(err){
        console.log(err, "error hendling pasdagilarga hammasiga bir xil boladi va u yozilishi kerak")
    }
}
memberController.getAllStudent = async (req:Request , res:Response) => {

}
memberController.getAllteacher = async (req:Request , res:Response) => {

}

memberController.signup = async (req: Request , res: Response) => {

}

memberController.login = async (req: Request , res: Response) => {

}
memberController.logout = async (req: Request , res: Response) => {

}
memberController.getMemberDetails = async (req: Request , res: Response) => {

}
memberController.updateMemberDetails = async (req: Request , res: Response) => {

}
memberController.getTopUsers = async (req: Request , res: Response) => {

}
import MemberSchema from "../schema/Member.Schema";



class MemberService {
    private readonly memberModel;
    constructor(){
        this.memberModel = MemberSchema;
    }
}




export default MemberService;
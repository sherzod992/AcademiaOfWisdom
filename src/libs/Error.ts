export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
  }
  
  export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong!",
    NO_DATA_FOUND = "No data found!",
    CREATE_FAILED = "Creation failed",
    UPDATE_FAILED = "Update failed",
    USED_NICK_PHONE = "You are inserting already used phone or nick!",
    BLOCKED_USER = "You have been blocked, contact support!",
    WRONG_PASSWORD = "Wrong password, please try again.",
    NO_MEMBER_NICK = "No member with this nickname.",
    NOT_AUTHENTICATED = "You are not authenticated, please login first.",
  }
  
  class Errors extends Error {
    public code: HttpCode;
    public errorMessage: Message;
  
    // Standart universal error
    static standard = {
      code: HttpCode.INTERNAL_SERVER_ERROR,
      errorMessage: Message.SOMETHING_WENT_WRONG,
    };
      static Message: any;
  
    constructor(statusCode: HttpCode, statusMessage: Message) {
      super(statusMessage); // bu Error.message'ga ham yoziladi
      this.code = statusCode;
      this.errorMessage = statusMessage;
    }
  }
  
  export default Errors;
  
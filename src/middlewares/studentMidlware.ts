import { NextFunction } from "express";
import { UserRole } from "../libs/enums/allUsers.enum";
import { Message } from "../libs/Error";

const verifyStudent = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.session?.member?.role === UserRole.STUDENT) {
        req.member = req.session.member;
        next();
    } else {
        const message = Message.NOT_AUTHENTICATED;
        res.send(`<script>alert("${message}"); window.location.replace('/login')</script>`);
    }
};
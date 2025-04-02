import { UserRole } from "../enums/user.enum";
export class User {
    constructor(
        public id: string,
        public username: string,
        public email: string,
        public password: string,
        public role: UserRole,
    ){}
}
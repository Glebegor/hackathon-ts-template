import {IsString, IsEnum, MinLength} from 'class-validator';
import { UserRole } from 'src/domain/enums/user.enum';

export class CreateUserDto  {
    @IsString()
    username: string;

    @IsString()
    email: string;
    
    @IsString()
    @MinLength(6)
    password: string;

    @IsEnum(UserRole, {"message": "role must be either 'user' or 'admin'"})
    role: UserRole;
}
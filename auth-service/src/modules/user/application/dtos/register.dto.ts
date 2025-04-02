import {IsString, IsEnum, MinLength, IsNotEmpty, IsEmail} from 'class-validator';
import { UserRole } from 'src/modules/auth/domain/enums/user.enum';

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsEnum(UserRole, {"message": "role must be either 'user' or 'admin'"})
    role: UserRole;
}
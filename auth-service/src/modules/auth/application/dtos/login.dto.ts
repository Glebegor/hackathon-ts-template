import {IsString, IsEnum, MinLength, IsNotEmpty, IsEmail} from 'class-validator';
import { UserRole } from 'src/modules/auth/domain/enums/user.enum';

export class LoginDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}
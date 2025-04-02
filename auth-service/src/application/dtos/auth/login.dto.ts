import {IsString, IsEnum, MinLength} from 'class-validator';
import { UserRole } from 'src/domain/enums/user.enum';

export class LoginDto {
    @IsString()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}
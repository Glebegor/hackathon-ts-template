import { User } from '../entities/user.entity';

export interface IAuthRepository {
    getUserByEmail(email: string): Promise<User | null>;
    getUserById(id: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
}
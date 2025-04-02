import { User } from "../domain/entities/user.entity";
import * as Prisma from "@prisma/client";

export class AuthSerializer {
    static fromPrisma(data: Prisma.User): User {
        return new User(
            data.id,
            data.email,
            data.password,
            data.role as User['role'],
            data.createdAt
        );
    }
    static fromPrismaMany(data: Prisma.User[]): User[] {
        return data.map((user) => this.fromPrisma(user));
    }
    static toPrisma(data: User): Prisma.User {
        return {
            id: data.id,
            email: data.email,
            password: data.password,
            role: data.role as unknown as Prisma.$Enums.UserRole,
            createdAt: data.createdAt
        };
    }
}


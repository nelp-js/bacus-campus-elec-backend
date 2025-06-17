import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class UsersService {
    constructor (private prisma: PrismaService){}


   /**
    *  retrieves all students from db
    * @returns - A promise that resolves to an array of student objects.
    */ 
    async findAllStudents() {
        return await this.prisma.student.findMany();
    }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service'
import { Student } from '@prisma/client'
import { NotFoundException } from '@nestjs/common'

@Injectable()
export class UsersService {
    constructor (private prisma: PrismaService){}


   /**
    *  retrieves all students from db
    * @returns - A promise that resolves to an array of student objects.
    */ 
    async findAllStudents(): Promise<Student[]> {
        return await this.prisma.student.findMany();
    }

    /**
     * Retrieves a student bty thier ID from the database.
     * 
     * @returns 
     */
    async findStudentById({ id }: {id: Student['studentId']}): Promise<Student>{
        const student = await this.prisma.student.findUnique({
            where: {
                studentId: id
            }
        })

        if (!student) {
            //Use NotFoundException for HTTP handling
            // @see @nest/common
            throw new NotFoundException('Student not found.')
        }

        return student;
    }
}

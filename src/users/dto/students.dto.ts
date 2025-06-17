import { ApiProperty } from '@nestjs/swagger';
import { Student, $Enums } from '@prisma/client';



export class ReturnedStudentDto implements Partial<Student> {
    @ApiProperty ({
        description: 'Unique identifier for the student',
        example: '123abc'
    })
    studentId: string;
    
    @ApiProperty({
        description: 'Deparment the student belongs to',
        example: 'Com sci'
    })
    department: string

    @ApiProperty ({
        description: 'Student/s assigned email',
        example: 'atbacus2@addu.edu.ph'
    })
    email: string

    @ApiProperty ({
        description: 'Name of the student',
        example: 'John Doe'
    })
    name: string

    @ApiProperty ({
        description: 'Role of the student',
        enum: $Enums.Role,
        example: $Enums.Role.STUDENT
    })
    role: $Enums.Role
}
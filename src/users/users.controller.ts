import { Get } from '@nestjs/common'
import { Controller } from '@nestjs/common'
import { UsersService } from './users.service'


@Controller('users')
export class UsersController {
    constructor (private readonly usersService: UsersService){}

    @Get('students')
    async findAllStudents() {
        return await this.usersService.findAllStudents();
    }
}

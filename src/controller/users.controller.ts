import { Body, Controller, Get, Injectable, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserRequestDto } from '../dto/CreateUsersRequest.dto';
import { UserDto } from '../dto/user.dto';
import { UsersService } from '../service/users.service';
import { IUsersController } from './interface/users.controller.interface';

@Injectable()
@ApiTags('Users')
@Controller('Users')
// implements IUsersController
export class UsersController implements IUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The record found',
    type: Array<UserDto>,
  })
  @ApiQuery({ name: 'firstName', type: 'string', required: false })
  @ApiQuery({ name: 'lastName', type: 'string', required: false })
  async listUsers(
    @Query('firstName') firstName?: string,
    @Query('lastName') lastName?: string,
  ): Promise<UserDto[]> {
    const query = { firstName, lastName };
    const res = await this.usersService.listUsers(query);
    return res;
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The user successfully created',
  })
  addUser(@Body() body: CreateUserRequestDto): Promise<any> {
    const res = this.usersService.addUser(body);
    return res;
  }
}

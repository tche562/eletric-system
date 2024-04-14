import { Injectable, Inject } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { Users } from 'src/entity/users.entity';
import { ListUsersQueryDto } from 'src/dto/listUsersQuery.dto';
import { UserDto } from 'src/dto/user.dto';
import { CreateUserRequestDto } from 'src/dto/CreateUsersRequest.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}
  listUsers(query: ListUsersQueryDto): Promise<UserDto[]> {
    try {
      return this.usersRepository.find({
        where: {
          firstName: query.firstName
            ? ILike('%' + query.firstName + '%')
            : query.firstName,
          lastName: query.lastName
            ? ILike('%' + query.lastName + '%')
            : query.lastName,
        },
      });
    } catch (e) {
      throw new Error(`error on listing users: ${e.message}.`);
    }
  }
  addUser(user: CreateUserRequestDto): Promise<any> {
    try {
      return this.usersRepository.save(user);
    } catch (e) {
      throw new Error(`error on creating a user: ${e.message}.`);
    }
  }
}

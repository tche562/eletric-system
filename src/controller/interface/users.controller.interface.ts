import { CreateUserRequestDto } from 'src/dto/CreateUsersRequest.dto';
import { UserDto } from 'src/dto/user.dto';

export interface IUsersController {
  listUsers(firstName?: string, lastName?: string): Promise<UserDto[]>;

  addUser(body: CreateUserRequestDto): Promise<any>;
}

import { Test } from '@nestjs/testing';
import { UsersController } from '../controller/users.controller';
import { UserDto } from '../dto/user.dto';
import { UsersService } from '../service/users.service';
import { usersProviders } from '../providers/users.providers';
import { DatabaseModule } from '../module/database.module';
import { CreateUserRequestDto } from '../dto/CreateUsersRequest.dto';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  const mockUsers: UserDto[] = [
    {
      id: 1,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
    },
    {
      id: 2,
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.johnson@example.com',
    },
  ];
  const mockSelectedUser: UserDto[] = [
    {
      id: 1,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
    },
  ];
  const mockToBeAddedUser: CreateUserRequestDto = {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
  };
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [UsersController],
      providers: [...usersProviders, UsersService],
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  describe('listUsers', () => {
    it('should return an array of all users', async () => {
      jest.spyOn(usersService, 'listUsers').mockResolvedValue(mockUsers);

      expect(await usersController.listUsers()).toBe(mockUsers);
    });

    it('should return specific array of users', async () => {
      jest.spyOn(usersService, 'listUsers').mockResolvedValue(mockSelectedUser);
      const queryLastName = mockUsers[1].lastName;
      const result = await usersController.listUsers(null, queryLastName);
      expect(await usersService.listUsers).toHaveBeenCalledWith({
        firstName: null,
        lastName: queryLastName,
      });
      expect(result).toEqual(mockSelectedUser);
    });
  });

  describe('addUser', () => {
    it('should add an users', async () => {
      jest.spyOn(usersService, 'addUser').mockResolvedValue(mockSelectedUser);
      const result = await usersController.addUser(mockToBeAddedUser);
      expect(await usersService.addUser).toHaveBeenCalledWith(
        mockToBeAddedUser,
      );
      expect(result).toEqual(mockSelectedUser);
    });
  });
});

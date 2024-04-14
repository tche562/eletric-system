import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ListUsersQueryDto {
  @ApiProperty({
    description: 'first name of user.',
    required: false,
  })
  @IsString()
  firstName?: string;

  @ApiProperty({
    description: 'last name of user.',
    required: false,
  })
  @IsString()
  lastName?: string;
}

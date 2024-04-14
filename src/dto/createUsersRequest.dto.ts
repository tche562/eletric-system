import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserRequestDto {
  @ApiProperty({
    description: 'First name of the user',
    required: true,
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'Last name of the user',
    required: true,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'Email address of the user',
    required: false,
  })
  @IsString()
  email?: string;
}

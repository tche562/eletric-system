import { IsOptional, IsNumber, IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description:
      'Unique identifier of the user. The value of this field is ignored when user is created or updated.',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  id?: number;

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

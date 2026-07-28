import {IsBoolean,IsNotEmpty,IsNumber,IsOptional,IsString,MaxLength,} from 'class-validator';

export class CreatePriorityDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsNumber()
  level: number;

  @IsString()
  @MaxLength(20)
  color: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
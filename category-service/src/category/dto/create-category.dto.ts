import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { IsEnum } from 'class-validator';
import { CategoryType } from '../enums/category-type.enum';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

@IsString()
@IsNotEmpty()
@MaxLength(20)
code: string;

@IsEnum(CategoryType)
@IsNotEmpty()
type: CategoryType;

@IsOptional()
isActive?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;
}


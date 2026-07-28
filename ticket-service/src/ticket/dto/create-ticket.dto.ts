import {
  IsEnum ,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { TicketSource } from '../enums/ticket-source.enum';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5000)
  description: string;

  @IsInt()
  @Min(1)
  categoryId: number;

 @IsOptional()
@IsInt()
@Min(1)
priorityId?: number;

  @IsInt()
  @Min(1)
  statusId: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  customerId?: number;

  @IsOptional()
  @IsInt()
  createdBy?: number;

  @IsOptional()
  @IsInt()
  assignedTo?: number;

  @IsEnum(TicketSource)
  @IsNotEmpty()
  source : TicketSource;
}
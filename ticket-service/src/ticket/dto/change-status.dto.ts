import { IsInt, Min } from 'class-validator';

export class ChangeStatusDto {

  @IsInt()
  @Min(1)
  statusId: number;

}
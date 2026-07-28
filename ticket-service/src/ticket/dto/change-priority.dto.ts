import { IsInt, Min } from 'class-validator';

export class ChangePriorityDto {
  @IsInt()
  @Min(1)
  priorityId: number;
}
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Ticket } from './entities/ticket.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
// این کلاس قابل تزریقه 
//با سایر قسمت ها در ارتباط است module
@Injectable()
export class TicketService {
  //constructor هر وقت کلاس میسازیم اجرا میشه 
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,

    private readonly httpService: HttpService,
  ) {}
//==============================================================================================
//متد ساخت شماره تیکت 
  private generateTicketNumber(): string {
    const now = new Date(); //دریافت زمان و تاریخ 
    //ساخت بخش تاریخ
    const date =
      now.getFullYear().toString() +  
      (now.getMonth() + 1).toString().padStart(2, '0') +
      now.getDate().toString().padStart(2, '0');
    //تولید عدد تصادفی 
    const random = Math.floor(
      100000 + Math.random() * 900000,
    ); 
   //ترکیب random+data
    return `TKT-${date}-${random}`;
  }

//=================================================================================================
//اولویت خودکار را پیدا میکند
  private detectPriority(
  title: string,
  description: string,
): number {
  const text =
    `${title} ${description}`.toLowerCase();

  if (
    text.includes('critical') ||
    text.includes('urgent') ||
    text.includes('down') ||
    text.includes('outage')
  ) {
    return 1; // Critical
  }
  if (
    text.includes('error') ||
    text.includes('failed')
  ) {
    return 4; // High
  }
  if (
    text.includes('slow')
  ) {
    return 3; // Medium
  }

  return 2; // Normal
}

//=======================================================================================
private calculateDueDate(
  priorityId: number,
): Date {

  const dueDate = new Date();

  switch (priorityId) {

    case 1: // Critical
      dueDate.setHours(
        dueDate.getHours() + 1,
      );
      break;

    case 4: // High
      dueDate.setHours(
        dueDate.getHours() + 4,
      );
      break;

    case 6: // Medium
      dueDate.setHours(
        dueDate.getHours() + 8,
      );
      break;

    case 7: // Normal
      dueDate.setHours(
        dueDate.getHours() + 24,
      );
      break;

    case 5: // Low
      dueDate.setHours(
        dueDate.getHours() + 72,
      );
      break;
  }

  return dueDate;
}
//============================================
// workflow سیستم را کنترل میکند
private canChangeStatus(
  currentStatus: number,
  newStatus: number,
): boolean {

  const workflow: Record<number, number[]> = {

    1: [2],        // New → Assigned

    2: [3],        // Assigned → In Progress

    3: [4,5,6],    // In Progress → Waiting Customer / Waiting Department / Testing

    4: [3],        // Waiting Customer → In Progress

    5: [3],        // Waiting Department → In Progress

    6: [7],        // Testing → Resolved

    7: [8,10],     // Resolved → Closed / Reopened

    8: [],         // Closed

    9: [],         // Cancelled

    10:[3],        // Reopened → In Progress

  };

  return (
    workflow[currentStatus]?.includes(newStatus) ??
    false
  );
}

//==================================================
//اعتبارسنجی category
private async validateCategory(id: number) {
  try {
    await firstValueFrom(
      this.httpService.get(
        `http://localhost:3001/categories/${id}`,
      ),
    );
  } catch {
    throw new BadRequestException(
      'Category not found',
    );
  }
}

private async validatePriority(id: number) {
  try {
    await firstValueFrom(
      this.httpService.get(
        `http://localhost:3002/priorities/${id}`,
      ),
    );
  } catch {
    throw new BadRequestException(
      'Priority not found',
    );
  }
}



private async validateStatus(id: number) {
  try {
    await firstValueFrom(
      this.httpService.get(
        `http://localhost:3003/statuses/${id}`,
      ),
    );
  } catch {
    throw new BadRequestException(
      'Status not found',
    );
  }
}
//----------------------------------------------------
//بررسی وجود وضعیت
async changeStatus(
  id: number,
  statusId: number,
) {

  await this.validateStatus(statusId);

  const ticket =
    await this.findOne(id);

  if (
    !this.canChangeStatus(
      ticket.statusId,
      statusId,
    )
  ) {
    throw new BadRequestException(
      'Status transition is not allowed',
    );
  }

  ticket.statusId = statusId;

  return await this.ticketRepository.save(ticket);
}


//-------------------------------------
  async create(createTicketDto: CreateTicketDto) {
    if (!createTicketDto.priorityId) {
  createTicketDto.priorityId =
    this.detectPriority(
      createTicketDto.title,
      createTicketDto.description,
    );
}
    await this.validateCategory(createTicketDto.categoryId);
    await this.validatePriority(createTicketDto.priorityId);
    await this.validateStatus(createTicketDto.statusId);

    const ticketNumber = this.generateTicketNumber();

  const newTicket =
  this.ticketRepository.create({
    ...createTicketDto,
    ticketNumber,
    dueDate: this.calculateDueDate(
      createTicketDto.priorityId,
    ),
  });

    return await this.ticketRepository.save(newTicket);
  }
//----------------------------------------


async findAll() {

  return this.ticketRepository.find({
    where:{
      isDeleted:false
    },
    order:{
      createdAt:'DESC'
    }
  });

}
//-------------------------------


  async findOne(id: number) {

  const ticket =
    await this.ticketRepository.findOne({
      where: {
        id,
      },
    });


  if (!ticket) {
    throw new NotFoundException(
      'Ticket not found',
    );
  }


  return ticket;
}
//-------------------------


  async update(
  id: number,
  dto: UpdateTicketDto,
) {

  const ticket = await this.findOne(id);

  if (dto.categoryId) {
    await this.validateCategory(dto.categoryId);
  }

  if (dto.priorityId) {
    await this.validatePriority(dto.priorityId);
  }

  if (dto.statusId) {
    await this.validateStatus(dto.statusId);
  }

  Object.assign(ticket, dto);

  return this.ticketRepository.save(ticket);
}
//-------------------------------
  async changePriority(
  id: number,
  priorityId: number,
) {
  await this.validatePriority(priorityId);

  const ticket = await this.findOne(id);

  ticket.priorityId = priorityId;

  return await this.ticketRepository.save(ticket);
}
//------------------------
  async remove(id: number) {
    const ticket = await this.findOne(id);

    ticket.isDeleted = true;
    ticket.deletedAt = new Date();

    return await this.ticketRepository.save(ticket);
  }
}

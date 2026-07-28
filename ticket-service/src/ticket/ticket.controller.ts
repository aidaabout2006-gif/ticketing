import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { TicketService } from './ticket.service';

import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ChangePriorityDto } from './dto/change-priority.dto';
import { ChangeStatusDto } from './dto/change-status.dto';

@Controller('tickets')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
  ) {}

  @Post()
  create(
    @Body() createTicketDto: CreateTicketDto,
  ) {
    return this.ticketService.create(createTicketDto);
  }

  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: string, //  شناسه داخل URL
  ) {
    return this.ticketService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTicketDto: UpdateTicketDto,
  ) {
    return this.ticketService.update(
      +id,
      updateTicketDto,
    );
  }

  @Patch(':id/priority')
  changePriority(
    @Param('id') id: string,
    @Body() dto: ChangePriorityDto,
  ) {
    return this.ticketService.changePriority(
      +id,
      dto.priorityId,
    );
  }

  @Patch(':id/status')
  changeStatus(
    @Param('id') id: string, 
    @Body() dto: ChangeStatusDto,
  ) {
    return this.ticketService.changeStatus(
      +id,
      dto.statusId,
    );
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
  ) {
    return this.ticketService.remove(+id);
  }
}
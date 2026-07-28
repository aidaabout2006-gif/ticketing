// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Patch,
//   Post,
// } from '@nestjs/common';

// import { GatewayService } from './gateway.service';

// @Controller()
// export class GatewayController {
//   constructor(
//     private readonly gatewayService: GatewayService,
//   ) {}

//   // ================= Ticket =================

//   @Get('tickets')
//   getTickets() {
//     return this.gatewayService.getTickets();
//   }

//   @Get('tickets/:id')
//   getTicket(
//     @Param('id') id: number,
//   ) {
//     return this.gatewayService.getTicket(id);
//   }

//   @Post('tickets')
//   createTicket(
//     @Body() body: any,
//   ) {
//     return this.gatewayService.createTicket(body);
//   }

//   @Patch('tickets/:id')
//   updateTicket(
//     @Param('id') id: number,
//     @Body() body: any,
//   ) {
//     return this.gatewayService.updateTicket(id, body);
//   }

//   @Delete('tickets/:id')
//   deleteTicket(
//     @Param('id') id: number,
//   ) {
//     return this.gatewayService.deleteTicket(id);
//   }

//   // ================= Category =================

//   @Get('categories')
//   getCategories() {
//     return this.gatewayService.getCategories();
//   }

//   // ================= Priority =================

//   @Get('priorities')
//   getPriorities() {
//     return this.gatewayService.getPriorities();
//   }

//   // ================= Status =================

//   @Get('statuses')
//   getStatuses() {
//     return this.gatewayService.getStatuses();
//   }
// }


import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { GatewayService } from './gateway.service';

@Controller()
export class GatewayController {
  constructor(
    private readonly gatewayService: GatewayService,
  ) {}

  // ================= Ticket =================

  @Get('tickets')
  getTickets() {
    return this.gatewayService.getTickets();
  }

  @Get('tickets/:id')
  getTicket(
    @Param('id') id: number,
  ) {
    return this.gatewayService.getTicket(id);
  }

  @Post('tickets')
  createTicket(
    @Body() body: any,
  ) {
    return this.gatewayService.createTicket(body);
  }

  @Patch('tickets/:id')
  updateTicket(
    @Param('id') id: number,
    @Body() body: any,
  ) {
    return this.gatewayService.updateTicket(id, body);
  }

  @Delete('tickets/:id')
  deleteTicket(
    @Param('id') id: number,
  ) {
    return this.gatewayService.deleteTicket(id);
  }

  // ================= Category =================

  @Get('categories')
  getCategories() {
    return this.gatewayService.getCategories();
  }

  @Post('categories')
  createCategory(
    @Body() body: any,
  ) {
    return this.gatewayService.createCategory(body);
  }

  @Patch('categories/:id')
  updateCategory(
    @Param('id') id: number,
    @Body() body: any,
  ) {
    return this.gatewayService.updateCategory(id, body);
  }

  @Delete('categories/:id')
  deleteCategory(
    @Param('id') id: number,
  ) {
    return this.gatewayService.deleteCategory(id);
  }

  // ================= Priority =================

  @Get('priorities')
  getPriorities() {
    return this.gatewayService.getPriorities();
  }

  @Post('priorities')
  createPriority(
    @Body() body: any,
  ) {
    return this.gatewayService.createPriority(body);
  }

  @Patch('priorities/:id')
  updatePriority(
    @Param('id') id: number,
    @Body() body: any,
  ) {
    return this.gatewayService.updatePriority(id, body);
  }

  @Delete('priorities/:id')
  deletePriority(
    @Param('id') id: number,
  ) {
    return this.gatewayService.deletePriority(id);
  }

  // ================= Status =================

  @Get('statuses')
  getStatuses() {
    return this.gatewayService.getStatuses();
  }

  @Post('statuses')
  createStatus(
    @Body() body: any,
  ) {
    return this.gatewayService.createStatus(body);
  }

  @Patch('statuses/:id')
  updateStatus(
    @Param('id') id: number,
    @Body() body: any,
  ) {
    return this.gatewayService.updateStatus(id, body);
  }

  @Delete('statuses/:id')
  deleteStatus(
    @Param('id') id: number,
  ) {
    return this.gatewayService.deleteStatus(id);
  }
}
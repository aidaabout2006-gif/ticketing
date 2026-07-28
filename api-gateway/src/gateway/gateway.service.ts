// import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
// import { ConfigService } from '@nestjs/config';
// import { firstValueFrom } from 'rxjs';

// @Injectable()
// export class GatewayService {
//   constructor(
//     private readonly http: HttpService,
//     private readonly config: ConfigService,
//   ) {}

//   // ================= Generic Requests =================

//   private async get(url: string) {
//     const { data } = await firstValueFrom(
//       this.http.get(url),
//     );

//     return data;
//   }

//   private async post(
//     url: string,
//     body: unknown,
//   ) {
//     const { data } = await firstValueFrom(
//       this.http.post(url, body),
//     );

//     return data;
//   }

//   private async patch(
//     url: string,
//     body: unknown,
//   ) {
//     const { data } = await firstValueFrom(
//       this.http.patch(url, body),
//     );

//     return data;
//   }

//   private async delete(url: string) {
//     const { data } = await firstValueFrom(
//       this.http.delete(url),
//     );

//     return data;
//   }

//   // ================= Ticket =================

//   async getTickets() {
//     return this.get(
//       `${this.config.get<string>('TICKET_SERVICE')}/tickets`,
//     );
//   }

//   async getTicket(id: number) {
//     return this.get(
//       `${this.config.get<string>('TICKET_SERVICE')}/tickets/${id}`,
//     );
//   }

//   async createTicket(body: unknown) {
//     return this.post(
//       `${this.config.get<string>('TICKET_SERVICE')}/tickets`,
//       body,
//     );
//   }

//   async updateTicket(
//     id: number,
//     body: unknown,
//   ) {
//     return this.patch(
//       `${this.config.get<string>('TICKET_SERVICE')}/tickets/${id}`,
//       body,
//     );
//   }

//   async deleteTicket(id: number) {
//     return this.delete(
//       `${this.config.get<string>('TICKET_SERVICE')}/tickets/${id}`,
//     );
//   }

//   // ================= Category =================

//   async getCategories() {
//     return this.get(
//       `${this.config.get<string>('CATEGORY_SERVICE')}/categories`,
//     );
//   }

//   // ================= Priority =================

//   async getPriorities() {
//     return this.get(
//       `${this.config.get<string>('PRIORITY_SERVICE')}/priorities`,
//     );
//   }

//   // ================= Status =================

//   async getStatuses() {
//     return this.get(
//       `${this.config.get<string>('STATUS_SERVICE')}/statuses`,
//     );
//   }
// }



import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {}

  // ================= Generic Requests =================

  private async get(url: string) {
    const { data } = await firstValueFrom(
      this.http.get(url),
    );
    return data;
  }

  private async post(
    url: string,
    body: unknown,
  ) {
    const { data } = await firstValueFrom(
      this.http.post(url, body),
    );
    return data;
  }

  private async patch(
    url: string,
    body: unknown,
  ) {
    const { data } = await firstValueFrom(
      this.http.patch(url, body),
    );
    return data;
  }

  private async delete(url: string) {
    const { data } = await firstValueFrom(
      this.http.delete(url),
    );
    return data;
  }

  // ================= Ticket =================

  async getTickets() {
    return this.get(
      `${this.config.get<string>('TICKET_SERVICE')}/tickets`,
    );
  }

  async getTicket(id: number) {
    return this.get(
      `${this.config.get<string>('TICKET_SERVICE')}/tickets/${id}`,
    );
  }

  async createTicket(body: unknown) {
    return this.post(
      `${this.config.get<string>('TICKET_SERVICE')}/tickets`,
      body,
    );
  }

  async updateTicket(
    id: number,
    body: unknown,
  ) {
    return this.patch(
      `${this.config.get<string>('TICKET_SERVICE')}/tickets/${id}`,
      body,
    );
  }

  async deleteTicket(id: number) {
    return this.delete(
      `${this.config.get<string>('TICKET_SERVICE')}/tickets/${id}`,
    );
  }

  // ================= Category =================

  async getCategories() {
    return this.get(
      `${this.config.get<string>('CATEGORY_SERVICE')}/categories`,
    );
  }

  async createCategory(body: unknown) {
    return this.post(
      `${this.config.get<string>('CATEGORY_SERVICE')}/categories`,
      body,
    );
  }

  async updateCategory(
    id: number,
    body: unknown,
  ) {
    return this.patch(
      `${this.config.get<string>('CATEGORY_SERVICE')}/categories/${id}`,
      body,
    );
  }

  async deleteCategory(id: number) {
    return this.delete(
      `${this.config.get<string>('CATEGORY_SERVICE')}/categories/${id}`,
    );
  }

  // ================= Priority =================

  async getPriorities() {
    return this.get(
      `${this.config.get<string>('PRIORITY_SERVICE')}/priorities`,
    );
  }

  async createPriority(body: unknown) {
    return this.post(
      `${this.config.get<string>('PRIORITY_SERVICE')}/priorities`,
      body,
    );
  }

  async updatePriority(
    id: number,
    body: unknown,
  ) {
    return this.patch(
      `${this.config.get<string>('PRIORITY_SERVICE')}/priorities/${id}`,
      body,
    );
  }

  async deletePriority(id: number) {
    return this.delete(
      `${this.config.get<string>('PRIORITY_SERVICE')}/priorities/${id}`,
    );
  }

  // ================= Status =================

  async getStatuses() {
    return this.get(
      `${this.config.get<string>('STATUS_SERVICE')}/statuses`,
    );
  }

  async createStatus(body: unknown) {
    return this.post(
      `${this.config.get<string>('STATUS_SERVICE')}/statuses`,
      body,
    );
  }

  async updateStatus(
    id: number,
    body: unknown,
  ) {
    return this.patch(
      `${this.config.get<string>('STATUS_SERVICE')}/statuses/${id}`,
      body,
    );
  }

  async deleteStatus(id: number) {
    return this.delete(
      `${this.config.get<string>('STATUS_SERVICE')}/statuses/${id}`,
    );
  }
}
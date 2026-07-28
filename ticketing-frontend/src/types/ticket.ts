export interface Ticket {

  id:number;

  ticketNumber:string;

  title:string;

  description:string;

  categoryId:number;

  priorityId:number;

  statusId:number;

  customerId:number | null;

  createdBy:number | null;

  assignedTo:number | null;

  isDeleted:boolean;

  deletedAt:string | null;

  dueDate:string | null;

  source:string;

  createdAt:string;

  updatedAt:string;

}
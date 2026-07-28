import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,} from 'typeorm';
import { TicketSource } from '../enums/ticket-source.enum';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  ticketNumber: string;

  @Column({
    length: 200, //حداکثر طولش 200 کاراکتر
  })
  title: string;

  @Column('text')
  description: string;
//============================================
//ارتباط به بقیه بخش ها 
  @Column()
  categoryId: number;

  @Column()
  priorityId: number;

  @Column()
  statusId: number;
//============================================
//شناسه کاربری که تیکت ثبت کرده 
  @Column({
    nullable: true,
  })
  customerId: number;
// چه کسی تیکت رو ایجاد کرده
  @Column({
    nullable: true,
  })
  createdBy: number;
//به کدوم کارشناس ارسال بشه
  @Column({
    nullable: true,
  })
  assignedTo: number;
//=============================================
//ایا واقعا تیکت حذف شده ؟
  @Column({
    default: false,
  })
  isDeleted: boolean;
//تاریخ و ساعت دقیق حذف شدن تیکت رو نگه میداره 
  @Column({
    nullable: true,
  })
  deletedAt: Date;
//مهلت پاسخگویی
  @Column({
  type: 'datetime',
  nullable: true,
})
dueDate: Date;
//================================================
//تیکت از کجا ثبت شده ؟ کاربر ؟ اپراتور ؟ و بقیه
  @Column({
    type : 'nvarchar',
    length :20,
    default : TicketSource.API
  })
  source: TicketSource;
// تاریخ و ساعت دقیق ایجاد تیکت
  @CreateDateColumn()
  createdAt: Date;
// تاریخ و ساعت تغییر روی تیکت
  @UpdateDateColumn()
  updatedAt: Date;
}
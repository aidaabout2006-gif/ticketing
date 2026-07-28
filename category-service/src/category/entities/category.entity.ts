import { Entity, PrimaryGeneratedColumn,Column, CreateDateColumn, UpdateDateColumn,} from 'typeorm';
import { CategoryType } from '../enums/category-type.enum';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    length: 100,
  })
  name: string;

  @Column({
    nullable: true,
    length: 500,
  })
  description: string;

  @Column({
  unique: true,
  length: 20,
})
code: string;

@Column({
  default: true,
})
isActive: boolean;

@Column({
  type: 'varchar',
  length: 30,
})
type: CategoryType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
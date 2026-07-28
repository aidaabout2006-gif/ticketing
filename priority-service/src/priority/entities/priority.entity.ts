import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,} from 'typeorm';
@Entity('priorities')
export class Priority {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    unique: true,
    length: 50,
  })
  name: string;
@Column({
  type: 'int',
  unique: true,
})
  level: number;

  @Column({
    length: 20,
  })
  color: string;

  @Column({
    default: true,
  })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
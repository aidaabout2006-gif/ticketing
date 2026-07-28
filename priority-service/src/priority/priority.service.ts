import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Priority } from './entities/priority.entity';
import { CreatePriorityDto } from './dto/create-priority.dto';
import { UpdatePriorityDto } from './dto/update-priority.dto';

@Injectable()
export class PriorityService {
  constructor(
    @InjectRepository(Priority)
    private readonly priorityRepository: Repository<Priority>,
  ) {}

  async create(createPriorityDto: CreatePriorityDto) {
    const priority =
      this.priorityRepository.create(createPriorityDto);

    return await this.priorityRepository.save(priority);
  }

  async findAll() {
    return await this.priorityRepository.find({
      order: {
        level: 'ASC',
      },
    });
  }

  async findOne(id: number) {
    const priority =
      await this.priorityRepository.findOne({
        where: { id },
      });

    if (!priority) {
      throw new NotFoundException(
        'Priority not found',
      );
    }

    return priority;
  }

  async update(
    id: number,
    updatePriorityDto: UpdatePriorityDto,
  ) {
    const priority =
      await this.findOne(id);

    Object.assign(
      priority,
      updatePriorityDto,
    );

    return await this.priorityRepository.save(priority);
  }

  async remove(id: number) {
    const priority =
      await this.findOne(id);

    await this.priorityRepository.remove(priority);

    return {
      message:
        'Priority deleted successfully',
    };
  }
}
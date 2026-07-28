import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Status } from './entities/status.entity';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status)
    private readonly statusRepository: Repository<Status>,
  ) {}

  async create(createStatusDto: CreateStatusDto) {
    const status =
      this.statusRepository.create(createStatusDto);

    return await this.statusRepository.save(status);
  }

  async findAll() {
    return await this.statusRepository.find();
  }

  async findOne(id: number) {
    const status =
      await this.statusRepository.findOne({
        where: { id },
      });

    if (!status) {
      throw new NotFoundException(
        'Status not found',
      );
    }

    return status;
  }

  async update(
    id: number,
    updateStatusDto: UpdateStatusDto,
  ) {
    const status =
      await this.findOne(id);

    Object.assign(
      status,
      updateStatusDto,
    );

    return await this.statusRepository.save(status);
  }

  async remove(id: number) {
    const status =
      await this.findOne(id);

    await this.statusRepository.remove(status);

    return {
      message:
        'Status deleted successfully',
    };
  }
}
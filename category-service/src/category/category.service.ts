import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryType } from './enums/category-type.enum';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category =
      this.categoryRepository.create(createCategoryDto);

    return await this.categoryRepository.save(category);
  }

  async findAll(
    page: number,
    limit: number,
    type?: CategoryType,
  ) {
    const where = type ? { type } : {};

    const [data, total] =
      await this.categoryRepository.findAndCount({
        where,
        skip: (page - 1) * limit,
        take: limit,
        order: {
          id: 'ASC',
        },
      });

    return {
      data,
      total,
      page,
      limit,
    };
  }

  async findOne(id: number) {
    const category =
      await this.categoryRepository.findOne({
        where: { id },
      });

    if (!category) {
      throw new NotFoundException(
        'Category not found',
      );
    }

    return category;
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ) {
    const category =
      await this.findOne(id);

    Object.assign(
      category,
      updateCategoryDto,
    );

    return await this.categoryRepository.save(category);
  }

  async remove(id: number) {
    const category =
      await this.findOne(id);

    await this.categoryRepository.remove(category);

    return {
      message:
        'Category deleted successfully',
    };
  }
}
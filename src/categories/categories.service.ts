import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Categoria } from './model/category.model';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Categoria) private categoriarepo:typeof Categoria) {} 
  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoriarepo.create(createCategoryDto);
  }

  async findAll() {
    return await this.categoriarepo.findAll();
  }

  async findOne(id: number) {
    return await this.categoriarepo.findOne({
      where:{
        id:id
      }
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoriarepo.update(updateCategoryDto,{
      where:{
        id:id
      }
    }); 
  }

  async remove(id: number) {
    return await this.categoriarepo.destroy({
      where:{
        id:id
      }
    });
  }
}

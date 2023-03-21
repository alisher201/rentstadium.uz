import { Categoria } from './model/category.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
  imports:[SequelizeModule.forFeature([Categoria])],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}

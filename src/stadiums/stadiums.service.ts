import { Injectable } from '@nestjs/common';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Stadium } from './model/stadium.model';

@Injectable()
export class StadiumsService {
  constructor(@InjectModel(Stadium) private stadiumsRepo:typeof Stadium){}
  async create(createStadiumDto: CreateStadiumDto) {
    return await this.stadiumsRepo.create(createStadiumDto);
  }

  async findAll() {
    return await this.stadiumsRepo.findAll();
  }

  async findOne(id: number) {
    return await this.stadiumsRepo.findOne({
      where:{
        id:id
      }
    });
  }

  async update(id: number, updateStadiumDto: UpdateStadiumDto) {
    return await this.stadiumsRepo.update(updateStadiumDto,{
      where: {
        id:id
      }
    });
  }

  async remove(id: number) {
    return await this.stadiumsRepo.destroy({
      where:{
        id:id
      }
    });
  }
}

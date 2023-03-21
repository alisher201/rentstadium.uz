import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import { Stadium_time } from './model/stadium_time.model';

@Injectable()
export class StadiumTimesService {
  constructor(@InjectModel(Stadium_time) private stadiumRepo:typeof Stadium_time) {}
  async create(createStadiumTimeDto: CreateStadiumTimeDto) {
    return await this.stadiumRepo.create(createStadiumTimeDto);
  }

  async findAll() {
    return await this.stadiumRepo.findAll();
  }

  async findOne(id: number) {
    return await this.stadiumRepo.findOne({
      where:{
        id:id
      }
    });
  }

  async update(id: number, updateStadiumTimeDto: UpdateStadiumTimeDto) {
    return await this.stadiumRepo.update(updateStadiumTimeDto, {
      where: {
        id: id
      }
    });
  }


  async remove(id: number) {
    return await this.stadiumRepo.destroy({
      where:{
        id:id
      }
    });
  }
}

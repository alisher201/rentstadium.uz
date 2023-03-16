import { Injectable } from '@nestjs/common';
import { CreateComfortStadiumDto } from './dto/create-comfort_stadium.dto';
import { UpdateComfortStadiumDto } from './dto/update-comfort_stadium.dto';
import { InjectModel } from '@nestjs/sequelize';
import { comfort_stadium } from './model/comfort_stadium.model';

@Injectable()
export class ComfortStadiumService {

  constructor(@InjectModel(comfort_stadium)private comfort_stadiumrepo:typeof comfort_stadium){}
  async create(createComfortStadiumDto: CreateComfortStadiumDto) {
    return await this.comfort_stadiumrepo.create(createComfortStadiumDto);
  }

  async findAll() {
    return await this.comfort_stadiumrepo.findAll();
  }

  async findOne(id: number) {
    return await this.comfort_stadiumrepo.findOne({
      where:{
        id:id
      }
    });
  }

  async update(id: number, updateComfortStadiumDto: UpdateComfortStadiumDto) {
    return await this.comfort_stadiumrepo.update(updateComfortStadiumDto,{
      where:{
        id:id
      }
    });
  }

  async  remove(id: number) {
    return await this.comfort_stadiumrepo.destroy({
      where:{
        id:id
      }
    });
  }
}
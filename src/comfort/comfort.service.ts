import { Comfort } from './models/comfort.models';
import { Injectable } from '@nestjs/common';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ComfortService {
  constructor(@InjectModel(Comfort) private comfortRepo : typeof Comfort){}
  async create(createComfortDto: CreateComfortDto) {
    return await this.comfortRepo.create(createComfortDto);
  }

  async findAll() {
    return await this.comfortRepo.findAll();
  }

  async findOne(id:number) {
    return await this.comfortRepo.findOne({
      where:{
        id:id
      }
    });
  }

  async update(UpdateComfortDto:UpdateComfortDto,id:number) {
    return await this.comfortRepo.update(UpdateComfortDto,{
      where:{
        id:id
      }
    })
  }

  async remove(id:number) {
    return await this.comfortRepo.destroy({
      where:{
        id: id
      }
    })
  }


  
}

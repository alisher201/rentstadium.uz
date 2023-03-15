import { Region } from './models/region.models';
import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateRegionDto } from './dto/update-region.dto';

@Injectable()
export class RegionService {

  constructor(@InjectModel(Region)private regionRepo: typeof Region){}
 async create(createRegionDto: CreateRegionDto) {

    return await this.regionRepo.create(createRegionDto);
  }

  async findAll(){
    return await this.regionRepo.findAll()
  }

  async findeOne(id:number){
    return await this.regionRepo.findOne({
      where:{
        id:id
      }
    });
  }

  async update(updateRegionDto:UpdateRegionDto,id:number){
    return await this.regionRepo.update(updateRegionDto,{
      where:{
        id:id
      }
    })
  }

  async remove(id:number){
    return await this.regionRepo.destroy({
      where:{
        id:id
      }
    })
  }

}

import { District } from './models/district.model';
import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DistrictService {

  constructor (@InjectModel(District)private districtrepo:typeof District){}
  async create(createDistrictDto: CreateDistrictDto) {
    return await this.districtrepo.create(createDistrictDto);
  }

  async findAll() {
    return await this.districtrepo.findAll();
  }

  async findOne(id: number) {
    return await this.districtrepo.findOne({
      where:{
        id:id
      }
    });
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return await this.districtrepo.update(updateDistrictDto,{
      where:{
        id:id
      }
    });
  }

  async remove(id: number) {
    return await this.districtrepo.destroy({
      where:{
        id:id
      }
    });
  }
}

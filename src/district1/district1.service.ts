
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDistrict1Dto } from './dto/create-district1.dto';
import { UpdateDistrict1Dto } from './dto/update-district1.dto';
import { District } from './model/district1.model';

@Injectable()
export class District1Service {

  constructor (@InjectModel(District)private districtrepo:typeof District){}
  async create(createDistrictDto: CreateDistrict1Dto) {
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

  async update(id: number, updateDistrictDto: UpdateDistrict1Dto) {
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

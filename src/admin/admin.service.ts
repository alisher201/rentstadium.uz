import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './model/admin.model';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminRepo: typeof Admin) {}
  async create(createAdminDto: CreateAdminDto) {
    return await this.adminRepo.create(createAdminDto);
  }

  async findAll() {
    return await this.adminRepo.findAll();
  }

  async findOne(id: number) {
    return await this.adminRepo.findOne({
      where:{
        id: id
      }
    });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    return await this.adminRepo.update(updateAdminDto,{
      where:{
        id:id
      }
    });
  }

 async  remove(id: number) {
    return await this.adminRepo.destroy({
      where:{
        id:id
      }
    });
  }
}

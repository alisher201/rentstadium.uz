import { Users } from './model/user.model';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users) private usersRepo:typeof Users){}
  async create(createUserDto: CreateUserDto) {
    return await this.usersRepo.create(createUserDto);
  }

  async findAll() {
    return await this.usersRepo.findAll();
  }

  async findOne(id: number) {
    return await this.usersRepo.findOne({
      where:{
        id:id
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.usersRepo.update(updateUserDto,{
      where:{
        id:id
      }
    });
  }

  async remove(id: number) {
    return await this.usersRepo.destroy({
      where:{
        id:id
      }
    })
  }
}

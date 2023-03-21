import { Injectable } from '@nestjs/common';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User_card } from './model/user_card.model';

@Injectable()
export class UserCardsService {
  constructor(@InjectModel(User_card) private user_cardRepo:typeof User_card){}
  async create(createUserCardDto: CreateUserCardDto) {
    return await this.user_cardRepo.create(createUserCardDto);
  }

  async findAll() {
    return await this.user_cardRepo.findAll();
  }

  async findOne(id: number) {
    return await this.user_cardRepo.findOne({
      where:{
        id:id
      }
    });
  }

  async update(id: number, updateUserCardDto: UpdateUserCardDto) {
    return await this.user_cardRepo.update(updateUserCardDto,
      {
        where:{
          id:id
        }
      });
  }

  async  remove(id: number) {
    return await this.user_cardRepo.destroy({
      where:{
        id:id
      }
    });
  }
}

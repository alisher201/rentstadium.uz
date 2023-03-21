import { Injectable } from '@nestjs/common';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User_wallet } from './model/user_wallet.model';

@Injectable()
export class UserWalletService {
  constructor(@InjectModel(User_wallet) private user_walletRepo:typeof User_wallet){}
  async create(createUserWalletDto: CreateUserWalletDto) {
    return await this.user_walletRepo.create(createUserWalletDto);
  }

  async findAll() {
    return await this.user_walletRepo.findAll();
  }

  async findOne(id: number) {
    return await this.user_walletRepo.findOne({
      where: {
        id:id
      }
    });
  }

  async update(id: number, updateUserWalletDto: UpdateUserWalletDto) {
    return await this.user_walletRepo.update(updateUserWalletDto,{
      where:{
        id:id
      }
    });
  }

  async remove(id: number) {
    return await this.user_walletRepo.destroy({
      where:{
        id:id
      }
    });
  }
}

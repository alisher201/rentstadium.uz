import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UserWalletService } from './user_wallet.service';
import { UserWalletController } from './user_wallet.controller';
import { User_wallet } from './model/user_wallet.model';

@Module({
  imports: [SequelizeModule.forFeature([User_wallet])],
  controllers: [UserWalletController],
  providers: [UserWalletService]
})
export class UserWalletModule {}

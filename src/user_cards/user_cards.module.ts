import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UserCardsService } from './user_cards.service';
import { UserCardsController } from './user_cards.controller';
import { User_card } from './model/user_card.model';

@Module({
  imports: [SequelizeModule.forFeature([User_card])],
  controllers: [UserCardsController],
  providers: [UserCardsService]
})
export class UserCardsModule {}

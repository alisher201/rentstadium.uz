import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ComfortStadiumService } from './comfort_stadium.service';
import { ComfortStadiumController } from './comfort_stadium.controller';
import { comfort_stadium } from './model/comfort_stadium.model';

@Module({
  imports:[SequelizeModule.forFeature([comfort_stadium])],
  controllers: [ComfortStadiumController],
  providers: [ComfortStadiumService]
})
export class ComfortStadiumModule {}

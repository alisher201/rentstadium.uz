import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { StadiumTimesService } from './stadium_times.service';
import { StadiumTimesController } from './stadium_times.controller';
import { Stadium_time } from './model/stadium_time.model';

@Module({
  imports: [SequelizeModule.forFeature([Stadium_time])],
  controllers: [StadiumTimesController],
  providers: [StadiumTimesService]
})
export class StadiumTimesModule {}

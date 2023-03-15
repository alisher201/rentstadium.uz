import { Region } from './models/region.models';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';

@Module({
  imports:[SequelizeModule.forFeature([Region])],
  controllers: [RegionController],
  providers: [RegionService]
})
export class RegionModule {}

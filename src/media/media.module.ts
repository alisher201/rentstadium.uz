import {SequelizeModule} from '@nestjs/sequelize'
import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { Media } from './model/media.model';

@Module({
  imports:[SequelizeModule.forFeature([Media])],
  controllers: [MediaController],
  providers: [MediaService]
})
export class MediaModule {}
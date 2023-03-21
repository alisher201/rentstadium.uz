import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { District1Controller } from './district1.controller';
import { District1Service } from './district1.service';
import { District } from './model/district1.model';

@Module({
  imports: [SequelizeModule.forFeature([District])],
  controllers: [District1Controller],
  providers: [District1Service]
})
export class District1Module {}

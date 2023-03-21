import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin } from './model/admin.model';

@Module({
  imports:[SequelizeModule.forFeature([Admin])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}

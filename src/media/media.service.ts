import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './model/media.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media) private mediaRepo:typeof Media){}
  async create(createMediaDto: CreateMediaDto) {
    return await this.mediaRepo.create(createMediaDto);
  }

  async  findAll() {
    return await this.mediaRepo.findAll();
  }

  async findOne(id: number) {
    return await this.mediaRepo.findOne({
      where:{
        id:id
      }
    });
  }

  async update(id: number, updateMediaDto: UpdateMediaDto) {
    return await this.mediaRepo.update(updateMediaDto,{
      where:{
        id:id
      }
    });
  }

  async remove(id: number) {
    return await this.mediaRepo.destroy({
      where:{
        id:id
      }
    });
  }
}

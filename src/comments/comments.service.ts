import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Coment } from './model/comment.model';

@Injectable()
export class CommentsService {
  constructor(@InjectModel(Coment) private commentRepo:typeof Coment){}
  async create(createCommentDto: CreateCommentDto) {
    return await this.commentRepo.create(createCommentDto);
  }

  async findAll() {
    return await this.commentRepo.findAll();
  }

  async findOne(id: number) {
    return await this.commentRepo.findOne({
      where:{
        id:id
      }
    });
  }

 async  update(id: number, updateCommentDto: UpdateCommentDto) {
    return await this.commentRepo.update(updateCommentDto,{
      where:{
        id:id
      }
    });
  }

  async remove(id: number) {
    return await this.commentRepo.destroy({where:
      {id:id}
    });
  }
}

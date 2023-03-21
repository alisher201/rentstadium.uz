import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './model/cart.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartrepo:typeof Cart) {}
  async create(createCartDto: CreateCartDto) {
    return await this.cartrepo.create(createCartDto);
  }

  async  findAll() {
    return await this.cartrepo.findAll();
  }

  async findOne(id: number) {
    return await this.cartrepo.findOne({
      where:{
        id:id
      }
    });
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    return await  this.cartrepo.update(updateCartDto,{
      where:{
        id:id
      }
    });;
  }

  async remove(id: number) {
    return await this.cartrepo.destroy({
      where:{
        id:id
      }
    });;
  }
}

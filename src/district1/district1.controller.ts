import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { District1Service } from './district1.service';
import { CreateDistrict1Dto } from './dto/create-district1.dto';
import { UpdateDistrict1Dto } from './dto/update-district1.dto';

@Controller('district1')
export class District1Controller {
  constructor(private readonly district1Service: District1Service) {}

  @Post()
  create(@Body() createDistrict1Dto: CreateDistrict1Dto) {
    return this.district1Service.create(createDistrict1Dto);
  }

  @Get()
  findAll() {
    return this.district1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.district1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistrict1Dto: UpdateDistrict1Dto) {
    return this.district1Service.update(+id, updateDistrict1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.district1Service.remove(+id);
  }
}

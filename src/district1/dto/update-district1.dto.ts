import { PartialType } from '@nestjs/swagger';
import { CreateDistrict1Dto } from './create-district1.dto';

export class UpdateDistrict1Dto extends PartialType(CreateDistrict1Dto) {
    name?: string;
    region_id?: number;
}

import { PartialType } from '@nestjs/swagger';
import { CreateStadiumDto } from './create-stadium.dto';

export class UpdateStadiumDto extends PartialType(CreateStadiumDto) {
    id?: number;
    category_id?: number;
    owner_id?: number;
    contact_with?: string;
    name?: string;
    volume?: string;
    address?: string;
    region_id?: number;
    district_id?: number;
    location?: string;
    buildAt?: Date;
    start_time?: number;
    end_time?: number
}

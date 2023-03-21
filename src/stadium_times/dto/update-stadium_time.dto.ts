import { PartialType } from '@nestjs/swagger';
import { CreateStadiumTimeDto } from './create-stadium_time.dto';

export class UpdateStadiumTimeDto extends PartialType(CreateStadiumTimeDto) {
    id?:number;
    stadium_id?:number;
    start_time?:number;
    end_time?:number;
    price?:number;
}

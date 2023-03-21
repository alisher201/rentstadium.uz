import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateRegionDto {
    @ApiProperty({example:'User1',description:'Foydalanuvchi ismi'})
    @IsNotEmpty()
    readonly name:string;
}

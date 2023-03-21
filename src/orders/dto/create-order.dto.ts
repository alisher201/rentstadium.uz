import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateOrderDto { id:number;
    @ApiProperty({example:'1',description:'Foydalanuvchi idisi'})
    @IsNotEmpty()
    readonly user_id:number;

    @ApiProperty({example:'1',description:'Foydalanuvchi wallet_id'})
    @IsNotEmpty()
   readonly user_wallet_id:number;
    @ApiProperty({example:'1',description:'Foydalanuvchi st_times_idesi'})
    @IsNotEmpty()
    readonly st_times_id:number;
    @ApiProperty({example:'2004-02-21',description:"Foydalanuvchi tug'ulgan sanasi"})
    // @IsNotEmpty()
    readonly date:Date;
    @ApiProperty({example:'2008-21-02',description:'Foydalanuvchi date'})
    // @IsNotEmpty()
    readonly createdAt:Date;
    @ApiProperty({example:'1',description:'Foydalanuvchi st_times_idesi'})
    @IsNotEmpty()
    readonly status_id:number;}


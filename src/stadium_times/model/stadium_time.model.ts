import { Column, DataType, Model, Table } from "sequelize-typescript";

interface StadiumAttrebut{
    id:number;
    stadium_id:number;
    start_time:number;
    end_time:number;
    price:number;
}

@Table({tableName: "stadium"})
export class Stadium_time extends Model<Stadium_time,StadiumAttrebut>{
    @Column({
        type:DataType.INTEGER,
        unique:true,
        primaryKey:true,
        autoIncrement:true
    })
    id:number;
    @Column({
        type:DataType.INTEGER,
        allowNull:true,
    })
    stadium_id:number;

    @Column({
        type:DataType.INTEGER,
        allowNull:true,
    })
    start_time:number;

    @Column({
        type:DataType.INTEGER,
        allowNull:true,
    })
    end_time:number

    @Column({
        type:DataType.INTEGER,
        allowNull:true,
    })
    price:number

   
}
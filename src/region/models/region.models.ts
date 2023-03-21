
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface RegionAttrebut {
   id:number,
    name:string
}

@Table({tableName:'comfort'})
export class Region extends  Model<Region,RegionAttrebut>{
     @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
     })
     id:number
     @Column({
        type:DataType.INTEGER,
        allowNull: true

     })
     name:string
}
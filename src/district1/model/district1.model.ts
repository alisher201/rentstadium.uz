import {  AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

interface DistrictAttribut{
    name:String;
    region_id:number    
}

@Table({tableName:'district'})
export class District extends Model<District,DistrictAttribut>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        unique:true,
        primaryKey:true
    })
    id:number

    @Column({
        type:DataType.STRING,
        allowNull:true,
    })
    name:string
    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    region_id:number
}
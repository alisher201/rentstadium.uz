import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ComfortAttrebut {
    name:string
}

@Table({tableName:'comfort'})
export class Comfort extends  Model<Comfort,ComfortAttrebut>{
     @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
     })
     id:number
     @Column({
        type:DataType.STRING,
        allowNull: true

     })
     name:string
}
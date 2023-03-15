import { Column, DataType, Model, Table } from "sequelize-typescript";

interface MediaAttrebut{
    stadiun_id:number;
    photo:number;
    description:string
}


@Table({tableName:'media'})
export class Media extends Model<Media,MediaAttrebut>{
    @Column({
        type:DataType.INTEGER,
        unique:true,
        primaryKey:true,
        autoIncrement:true
    })
    id:number
    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    stadiun_id:number
    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    photo:number
    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    description:string
}
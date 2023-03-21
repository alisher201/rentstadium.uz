import { Column, DataType, Model, Table } from "sequelize-typescript";

interface categorAttribute{
    id:number;
    name:string;
    parent_id:number;
}
@Table({tableName: 'categoria'})
export class Categoria extends  Model<Categoria,categorAttribute>{
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })

    id:number;
    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    name:string;
    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    parent_id:number

}
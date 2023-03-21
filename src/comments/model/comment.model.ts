import { Column, DataType, Model, Table } from "sequelize-typescript"

interface CommentAttribute{
    id:number
    user_id:number
    stadium_id:number
    impression:string
}

@Table({tableName:'categoria'})
export class Coment extends Model<Coment,CommentAttribute>{
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number
    @Column({
        type:DataType.INTEGER,
        allowNull:true

    })
    user_id:number;
    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    stadium_id:number;
    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    impression:string;
}
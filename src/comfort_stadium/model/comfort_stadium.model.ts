import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ComfortStadium{
    stadium_id:number;
    comfort_id:number
}
@Table({tableName:'distcript'})
export class comfort_stadium extends Model<comfort_stadium,ComfortStadium>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        unique:true,
        primaryKey:true
    })
    id:number
    @Column({
        type:DataType.INTEGER,
        unique:true
    })
    stadium_id:number
    @Column({
        type:DataType.INTEGER,
        unique:true
    })
    comfort_id:number
}
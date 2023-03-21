import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CartAttrebut{
    id:number;
    user_id:number;
    user_wallet_id:number;
    st_times_id:number;
    date:Date;
    createdAt:Date;
    time_for_clear:Date;
    status_id:number;
}
@Table({tableName:'cart'})
export class Cart extends  Model<Cart,CartAttrebut>{
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;
    @Column({
        type:DataType.INTEGER,
        allowNull:true,
    })
    user_id:number


    @Column({
        type:DataType.INTEGER,
        allowNull:true,
    })
    user_wallet_id:number;
    @Column({
        type:DataType.INTEGER,
        allowNull:true,
    })
    st_times_id:number;

    @Column({
        type:DataType.DATE,
        allowNull:true,
    })
    date:Date;

    @Column({
        type:DataType.DATE,
        allowNull:true,
    })
    createdAt:Date;

    @Column({
        type:DataType.DATE,
        allowNull:true,
    })
    time_for_clear:Date;

    @Column({
        type:DataType.INTEGER,
        allowNull:true,
    })
    status_id:number;
  
}
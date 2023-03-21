import { Column, DataType, Model, Table } from "sequelize-typescript";

export class OrderAttribute {
    id:number;
    user_id:number;
    user_wallet_id:number;
    st_times_id:number;
    date:Date;
    createdAt:Date;
    status_id:number;
}

@Table({tableName: "order"})
export class Order extends Model<Order, OrderAttribute>{
    @Column({
        type:DataType.INTEGER,
        unique:true,
        primaryKey:true,
        autoIncrement:true
    })
    id:number;
    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    user_id:number;
    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    user_wallet_id:number;

    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    st_times_id:number;
    @Column({
        type:DataType.DATE,
        allowNull:true
    })
    date:Date;
    @Column({
        type:DataType.DATE,
        allowNull:true
    })
    createdAt:Date;
    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    status_id:number;
}
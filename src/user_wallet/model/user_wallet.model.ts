import { Column, DataType, Model, Table } from "sequelize-typescript";

interface User_walletAttribut {
    id: number;
    user_id: number;
    wallet: number;
}
@Table({ tableName: "user_wallet" })
export class User_wallet extends Model<User_wallet, User_walletAttribut>{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    })
    id: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    user_id: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    wallet: number;

}

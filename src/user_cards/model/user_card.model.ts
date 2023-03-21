import { Column, DataType, Model, Table } from "sequelize-typescript";

interface user_cardAttribut{
    id:number;
    user_id:number;
    name:string;
    phone:string;
    number:string;
    year:number;
    is_active:boolean;
    is_main:boolean;
}

@Table({tableName: "user_card"})
export class User_card extends Model<User_card,user_cardAttribut>{
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
      user_id:number;
    
      @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      name:string;
    
      @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      phone:string;
    
      @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      number:string;
      @Column({
        type: DataType.INTEGER,
        allowNull: true,
      })
      year:number;
    
      @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
      })
     
      is_active:boolean;
      @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
      })
      is_main:boolean;
  
    
}

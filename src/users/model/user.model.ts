import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UsersAttribut {
    id:number;
    first_name:string;
    last_name:string;
    username:string;
    hashed_password:string;
    telegram_link:string;
    email:string;
    phone:string;
    user_photo:string;
    birthday:Date;
    is_owner:boolean;
    is_active:boolean;
    hashed_refresh_token:string;
}

@Table({tableName: "users"})
export class Users extends Model<Users,UsersAttribut>{
    @Column({
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      })
      id: number;
      @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      first_name:string;
    
      @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      last_name:string;
    
      @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      username:string;
    
      @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      hashed_password:string;
      @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      telegram_link:string;
    
      @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      email:string;
      @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      phone:string;
      @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      user_photo:string;
      @Column({
        type: DataType.DATE,
        allowNull: true,
      })
      birthday:Date;
      @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
      })
      is_owner:boolean;
      @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
      })
      is_active:boolean;
    
      @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      hashed_refresh_token:string;

    
    
}
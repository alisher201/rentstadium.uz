import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AdminAttrebut{
    username: string;
    email: string;
    telegram_limk:string;
    admin_photo:string;
    hashed_password:string;
    is_active:boolean;
    is_create:boolean;
    hashed_refresh_token:number;
}

@Table({tableName: "admin"})
export class Admin extends Model<Admin,AdminAttrebut>{
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
     })
     id:number
     @Column({
        type:DataType.STRING,
        allowNull:true
     })
     username:string;
     @Column({
        type:DataType.STRING,
        allowNull:true
     })
     email:string;
     @Column({
        type:DataType.STRING,
        allowNull:true
     })
     telegram_link:string;
     @Column({
        type:DataType.STRING,
        allowNull:true
     })
     admin_photo:string;
     @Column({
        type:DataType.STRING,
        allowNull:true
     })
     hashed_password:string;
     @Column({
        type:DataType.BOOLEAN,
        allowNull:true
     })
     ic_active:boolean;
     @Column({
        type:DataType.BOOLEAN,
        allowNull:true
     })
     is_create:boolean;
     @Column({
        type:DataType.INTEGER,
        allowNull:true
     })
     hashed_refresh_token:number;
}
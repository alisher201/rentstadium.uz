import { Column, DataType, Model, Table } from "sequelize-typescript";

interface StadiumAttrebut {
  id: number;
  category_id: number;
  owner_id: number;
  contact_with: string;
  name: string;
  volume: string;
  address: string;
  region_id: number;
  district_id: number;
  location: string;
  buildAt: Date;
  start_time: number;
  end_time: number
}

@Table({ tableName: "stadium" })
export class Stadium extends Model<Stadium, StadiumAttrebut>{
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
  category_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  owner_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  contact_with: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  volume: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  region_id: number;
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  district_id: number;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  location: string;
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  buildAt: Date;
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  start_time: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  end_time: number


}

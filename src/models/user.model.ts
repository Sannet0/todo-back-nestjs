import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { ICreateUser } from '../interfaces/create-user-interface';

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, ICreateUser> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

}

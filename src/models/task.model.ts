import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { ICreateTask } from '../interfaces/create-task-interface';

@Table({ tableName: 'task' })
export class TaskModel extends Model<TaskModel, ICreateTask> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  text: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  isCompleted: boolean;

}

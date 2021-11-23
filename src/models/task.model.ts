import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface TaskCreationAttrs {
  text: string
}

@Table({ tableName: 'task' })
export class TaskModel extends Model<TaskModel, TaskCreationAttrs> {

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  text: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  isComplete: boolean;

}

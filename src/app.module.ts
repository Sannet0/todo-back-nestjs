import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksModule } from './tasks/tasks.module';
import { TasksModel } from "./tasks/tasks.model";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      models: [TasksModel],
      autoLoadModels: true
    }),
    TasksModule
  ]
})
export class AppModule {}

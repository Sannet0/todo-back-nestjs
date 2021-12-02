import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserModel } from '../models/user.model';

@Module({
  imports: [
    SequelizeModule.forFeature([UserModel]),
    JwtModule.register({
      secret: 'SECRET',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

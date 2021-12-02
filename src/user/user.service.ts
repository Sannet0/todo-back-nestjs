import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from '../models/user.model';
import { Repository } from 'sequelize-typescript';
import { ICreateUser } from '../interfaces/create-user-interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel) private userRepository: Repository<UserModel>,  private jwtService: JwtService) {
  }

  async registration(user: ICreateUser) {
    try {
      const passwordHash = await bcrypt.hash(user.password, 8);
      await this.userRepository.create({
        ...user,
        password: passwordHash
      });

      const jwt = this.getJWT({ login: user.login });

      return { jwt }
    } catch (e) {
      return { err: e };
    }
  }

  async login(user: ICreateUser) {
    try {
      const accurateUser = await this.userRepository.findOne({
        where: {
          login: user.login
        }
      });

      const isPasswordCorrect = await bcrypt.compare(user.password, accurateUser.password);
      if (isPasswordCorrect) {
        const jwt = this.getJWT({ login: user.login });
        return { jwt }
      }

      throw 'error';
    } catch (e) {
      return { err: e };
    }
  }

  getJWT(payload = {}) {
    return this.jwtService.sign(payload);
  }
}

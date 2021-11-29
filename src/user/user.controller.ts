import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/creating-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post('registration')
  registration(@Body() dto: CreateUserDto){
    return this.userService.registration(dto);
  }

  @Post('login')
  login(@Body() dto: CreateUserDto){
    return this.userService.login(dto);
  }
}

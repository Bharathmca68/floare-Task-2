import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: 'topsecret51',
    signOptions: {
      expiresIn: 3600, //will expires in 1hrs 
    }
  }), TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService]
})
export class UserModule { }

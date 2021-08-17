import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'root',
      password: 'password',
      database: 'user',
      entities: [User], // provide all the entites her inside the array
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    UserModule,
  ],
})
export class AppModule { }

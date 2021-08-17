import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfigAsync } from './config/typeormconfig';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(
      // type: 'mysql',
      // host: 'localhost',
      // port: 3309,
      // username: 'root',
      // password: 'password',
      // database: 'user',
      // entities: [User], // provide all the entites her inside the array
      // synchronize: true,
      typeOrmConfigAsync
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    UserModule,
  ],
})
export class AppModule { }

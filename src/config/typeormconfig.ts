import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from '../user/user.entity';



export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: "localhost",
            port: configService.get('DB_PORT') || 3309,
            username: 'root',
            password: 'password',
            database: 'user',
            entities: [User], // provide all the entites her inside the array
            synchronize: true,
        }
    }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService):
        Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
    inject: [ConfigService]
}

////////////////////////////////////////////
// type: 'mysql',
    // host: 'localhost',
    // port: 3309,
    // username: 'root',
    // password: 'password',
    // database: 'user',
    // entities: [User], // provide all the entites her inside the array
    // synchronize: true,
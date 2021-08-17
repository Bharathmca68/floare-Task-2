import { Repository } from 'typeorm';
import { LoginInput, User, UserInput } from './user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    users(page: any, size: any): Promise<any>;
    createUser(input: UserInput): Promise<any>;
    login(input: LoginInput): Promise<any>;
    findByName(user_name: any, page: any, size: any): Promise<any>;
    deleteItem(id: any): Promise<any>;
}

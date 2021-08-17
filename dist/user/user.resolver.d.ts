import { LoginInput, UserInput } from './user.entity';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    hello(): Promise<string>;
    createUser(input: UserInput): Promise<any>;
    users(page?: number, size?: number): Promise<any>;
    findByName(user_name: string, page?: number, size?: number): Promise<any>;
    login(input: LoginInput): Promise<any>;
    deleteItem(id: string): Promise<any>;
}

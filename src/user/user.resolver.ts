import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LoginInput, User, UserInput } from './user.entity';
import { UserService } from './user.service';
import { Response, UserType } from './user.type';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    //sample
    @Query(() => String)
    async hello() {
        return 'world----'
    }

    //creation of user
    @Mutation(() => UserType)
    async createUser(@Args('input') input: UserInput) {
        return await this.userService.createUser(input);
    }

    //Get all User with pagination
    @Query(() => [UserType])
    async users(
        @Args('page') page: number = 1, @Args('size') size: number = 2
    ) {
        return await this.userService.users(page, size);
    }

    //Find by name 
    @Query(returns => [UserType])
    async findByName(
        @Args('user_name') user_name: string,
        @Args('page') page: number = 1,
        @Args('size') size: number = 2
    ) {
        return await this.userService.findByName(user_name, page, size)
    }

    //Login and get access token
    @Mutation(returns => Response)
    async login(@Args('input') input: LoginInput) {
        return await this.userService.login(input);
    }

    //Deletion of user
    @Mutation(returns => String)
    async deleteItem(@Args('id') id: string) {
        return this.userService.deleteItem(id);
    }

}

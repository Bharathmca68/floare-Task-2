import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('User')
export class UserType {
    @Field(type => ID)
    id: string

    @Field()
    email: string

    @Field()
    user_name: string

    @Field()
    password: string
}

@ObjectType('Response')
export class Response {
    @Field()
    accessToken: string
}
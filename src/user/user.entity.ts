import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    user_name: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;
}

@InputType()
export class UserInput {
    @Field()
    @IsEmail()
    email: string

    @Field()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    user_name: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: "Password is too week" })
    password: string;
}

@InputType()
export class LoginInput {
    @Field()
    email: string

    @Field()
    password: string;
}
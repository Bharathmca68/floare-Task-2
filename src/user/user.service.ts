import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginInput, User, UserInput } from './user.entity';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService
    ) { }

    async users(page, size): Promise<any> {
        return await this.userRepository.find({
            take: size,
            skip: size * (page - 1)
        });
    }

    async createUser(input: UserInput): Promise<any> {
        const { email, user_name, password } = input
        //Hasing  password
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(password, salt)

        const newUser = this.userRepository.create({
            email,
            user_name,
            password: hash
        })

        try {
            return await this.userRepository.save(newUser)
        } catch (error) {
            if (error.errno === 1062) {
                throw new ConflictException('mail Id already exists')
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async login(input: LoginInput): Promise<any> {
        const { email, password } = input

        const user = await this.userRepository.findOne({ email })


        if (user && (await bcrypt.compare(password, user.password))) {
            const payload: JwtPayload = { email }
            const accessToken: string = await this.jwtService.sign(payload)
            return { accessToken }
        } else {
            throw new UnauthorizedException('please check your login credentials')
        }
    }

    async findByName(user_name, page, size): Promise<any> {
        return await this.userRepository.find({
            where: {
                user_name: user_name
            },
            take: size,
            skip: size * (page - 1)
        })
    }

    async deleteItem(id): Promise<any> {
        const DeletionId = await this.userRepository.findOne({ id });
        if (DeletionId) {
            await this.userRepository.delete(id);
            return `${id} is successfully deleted`
        } else {
            throw new NotFoundException(`could not delete || not found ${id}`)
        }
    }
}

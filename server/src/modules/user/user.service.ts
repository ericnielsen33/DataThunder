import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compareSync } from 'bcrypt';
import { HashService } from './hash.service';
import { User } from '../../entity/User';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @Inject(HashService) private readonly hashService: HashService,
    ) { }
    public async findAll(): Promise<User[]>{
        return await this.userRepository.find();
    }
    public async findOneByEmail(email: string): Promise<User>{
        return await this.userRepository.findOne({email});
    }
    public async createUser(newUser): Promise<User>{
        const user = new User();
        Object.assign(user, newUser);
        user.password = await this.hashService.hashItem(newUser.password);
        user.token = user.generateToken();
        return this.userRepository.save(user);
    }
    public async findByEmailAndValidatePassword(email: string, password: string): Promise<User|boolean>{
        const user = await this.userRepository.findOneOrFail({email});
        const isMatch = compareSync(password, user.password);
        if (isMatch) {
            return user;
        }
        return false;
    }
    public async findOneAndSetToken(id: number): Promise<User>{
        const user: User = await this.userRepository.findOne({id});
        user.token = user.generateToken();
        return this.userRepository.save(user);
    }
    public async findOneByToken(token: string): Promise<User>{
        const user = this.userRepository.findOneOrFail({ token });
        if (user) {
            return user;
        }
        return null;
    }
}
import { Repository } from 'typeorm';
import { HashService } from './hash.service';
import { User } from '../../entity/User';
export declare class UserService {
    private readonly userRepository;
    private readonly hashService;
    constructor(userRepository: Repository<User>, hashService: HashService);
    findAll(): Promise<User[]>;
    findOneByEmail(email: string): Promise<User>;
    createUser(newUser: any): Promise<User>;
    findByEmailAndValidatePassword(email: string, password: string): Promise<User | boolean>;
}

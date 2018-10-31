import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    OneToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { User } from './User';
import { Location } from './Location';

@Entity()
export class Organization {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(type => Location, location => location.organization)
    locations: Location[];

    @OneToMany(type => User, user => user.organization)
    users: User[];
}
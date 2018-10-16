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
import { Team } from './Team';

@Entity()
export class Organization {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    slug: string;
}
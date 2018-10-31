import { Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToOne, JoinColumn, JoinTable, Column } from 'typeorm';
import { User } from './User';
import { Job } from './Job';

@Entity()
export class Resident {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    level: string;

    @Column()
    pager: string;

    @Column()
    mobile: string;

    @OneToOne(type => User, user => user.resident)
    @JoinColumn()
    user: User;

    @ManyToMany(type => Job, job => job.employees)
    jobs: Job[];
}

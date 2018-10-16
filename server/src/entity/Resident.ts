import { Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToOne, JoinColumn, JoinTable } from 'typeorm';
import { User } from './User';
import { Job } from './Job';
import { Team } from './Team';

@Entity()
export class Resident {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User, user => user.resident)
    @JoinColumn()
    user: User;

    @ManyToMany(type => Job, job => job.employees)
    jobs: Job[];

    @ManyToOne(type => Team, team => team.teamMembers)
    team: Team;
}

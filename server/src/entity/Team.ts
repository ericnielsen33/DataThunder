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
import { Resident } from './Resident';
import { Patient } from './Patient';
import { Service } from './Service';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  name: string;

  @OneToOne(type => User)
  @JoinColumn()
  owner: User;

  @OneToMany(type => Resident, resident => resident.team)
  teamMembers: Resident[];

  @ManyToMany(type => Service, service => service.teams)
  services: Service[];

  @OneToMany(type => Patient, patient => patient.primaryTeam)
  patients: Patient[];
}

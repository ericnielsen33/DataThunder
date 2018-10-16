import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Team } from './Team';
import { Patient } from './Patient';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(type => Team, team => team.services)
  @JoinTable()
  teams: Team[];

  @ManyToMany(type => Patient, patient => patient.services)
  @JoinTable()
  patients: Patient[];
}
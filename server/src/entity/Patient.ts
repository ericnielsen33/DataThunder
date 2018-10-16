import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from 'typeorm';
import { Team } from './Team';
import { Service } from './Service';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dateofBirth: Date;
  @ManyToMany(type => Service, service => service.patients)
  services: Service[];
  // should patient be attached to jobs...residents are related to teams which relate to services... patients use services
  @ManyToOne(type => Team, team => team.patients)
  primaryTeam: Team;
}

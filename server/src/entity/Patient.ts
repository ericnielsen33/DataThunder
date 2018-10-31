import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from 'typeorm';
import { Service } from './Service';
// refernce v2 of the firbase datastore...MLN, gender, location: sting
@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: string;

  @Column()
  location: string;

  @Column()
  dateofBirth: Date;
  @ManyToMany(type => Service, service => service.patients)
  services: Service[];
  // should patient be attached to jobs...residents are related to teams which relate to services... patients use services
}

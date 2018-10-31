import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, Column } from 'typeorm';
import { Patient } from './Patient';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(type => Patient, patient => patient.services)
  @JoinTable()
  patients: Patient[];
}
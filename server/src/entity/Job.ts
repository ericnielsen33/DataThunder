import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import { Resident } from './Resident';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  level: number;

  @Column()
  shiftType: string;

  // should eventually be represnted using PG's native tstzrange datatype for each day
  @Column()
  timeOfDay: string;

  @Column()
  requiredOnMonday: number;

  @Column()
  requiredOnTuesday: number;

  @Column()
  requiredOnWednesday: number;

  @Column()
  requiredOnThursday: number;

  @Column()
  requiredOnFriday: number;

  @Column()
  requiredOnSaturday: number;

  @Column()
  requiredOnSunday: number;

  @ManyToMany(type => Resident, resident => resident.jobs)
  @JoinTable()
  employees: Resident[];
}

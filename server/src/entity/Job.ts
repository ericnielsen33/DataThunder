import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Resident } from './Resident';
import { Facility } from './Facility';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('simple-array')
  levels: number[];

  @Column()
  callType: boolean;

  @ManyToOne(type => Facility, facility => facility.jobs)
  facility: Facility;

  @ManyToMany(type => Resident, resident => resident.jobs)
  @JoinTable()
  employees: Resident[];
}

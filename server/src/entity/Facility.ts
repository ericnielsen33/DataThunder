// Organizations have locations;  one to many relation w/ locations
// orgs have a 1 to many w/ departments
// postions are assgned to departments
// job positins that rotate thoguh different locations
// services has  a many-toman w/ physicians

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToOne,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Organization } from './Organization';
import { Job } from './Job';

@Entity()
export class Facility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => Organization, organization => organization.locations)
  organization: Organization;

  @OneToMany(type => Job, job => job.facility)
  jobs: Job[];
}
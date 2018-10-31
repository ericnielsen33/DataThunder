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

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Organization, organization => organization.locations)
  organization: Organization;
}
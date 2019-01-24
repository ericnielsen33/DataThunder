import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { User } from './User';
import { Location } from './Location';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(type => Location, location => location.organization)
  locations: Promise<Location[]>;

  @ManyToMany(type => User, user => user.organizations)
  @JoinTable()
  users: Promise<User[]>;
}

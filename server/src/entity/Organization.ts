import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, OneToOne, JoinColumn, JoinTable } from 'typeorm';
import { User } from './User';
import { Facility } from './Facility';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToOne(type => User)
  @JoinColumn({name: 'owner'})
  owner: User;

  @OneToMany(type => Facility, location => location.organization, {cascade: true})
  locations: Facility[];

  @ManyToMany(type => User, user => user.organizations)
  @JoinTable()
  users: User[];
}

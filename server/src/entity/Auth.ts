import { Inject } from '@nestjs/common';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BeforeInsert } from 'typeorm';

import { User } from './User';

@Entity()
export class Auth {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;

  @BeforeInsert()
  setToken(){
      this.token = 'jhkhll';
  }
}
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, AfterInsert } from 'typeorm';
import { genSaltSync, hashSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Resident } from './Resident';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column()
  token: string;

  @OneToOne(type => Resident, resident => resident.user)
  resident: Resident;

  @AfterInsert()
  setToken() {
    this.token = this.generateToken();
  }

  hashPassword(password: string) {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  }
  generateToken() {
    const token = jwt.sign({ id: this.id }, 'secretkey', { expiresIn: '24h' });
    return token;
  }
}

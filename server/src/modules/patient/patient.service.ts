import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from '../../entity/Patient';

@Injectable()
export class PatientService {
    constructor(@InjectRepository(Patient) private readonly patientRepository: Repository<Patient>) { }
}

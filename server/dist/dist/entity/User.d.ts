import { Job } from './Job';
import { Team } from './Team';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    job: Job;
    team: Team;
    hashPassword(password: string): string;
}

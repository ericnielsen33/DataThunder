import { User } from './User';
import { Patient } from './Patient';
export declare class Team {
    id: number;
    name: string;
    owner: User;
    teamMembers: User[];
    patients: Patient[];
}

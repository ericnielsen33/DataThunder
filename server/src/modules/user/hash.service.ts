import { Injectable } from '@nestjs/common';
import { compareSync, hash, genSaltSync } from 'bcrypt';

@Injectable()
export class HashService {
   async hashItem(item: string): Promise<string>{
       const hashed = await hash(item, genSaltSync(10));
       return hashed;
   }
   async compareItem(item: string, hashedItem: string): Promise<boolean>{
       return await compareSync(item, hashedItem);
   }
}
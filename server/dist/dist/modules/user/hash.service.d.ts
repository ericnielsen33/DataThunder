export declare class HashService {
    hashItem(item: string): Promise<string>;
    compareItem(item: string, hashedItem: string): Promise<boolean>;
}

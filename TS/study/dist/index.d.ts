declare let a: number;
declare let b: never[];
declare enum Directtion {
    'Up' = 1,
    'DOwn' = 2,
    'Left' = 3,
    'Right' = 4
}
declare class IndexPage {
    state: {
        data: any[];
        duration: number;
        delay: number;
    };
}
interface PropsType<T, U> {
    (e: T): U;
}
declare class Stack<T> {
    private arr;
    push(item: T): void;
    pop(): void;
}
declare type partial<T> = {
    [K in keyof T]?: T[K];
};
interface User {
    username: string;
    id: number;
    token: string;
    avatar: string;
    role: string;
}
declare type partialUser = partial<User>;
interface Company {
    id: number;
    name: string;
}
interface Person {
    id: number;
    name: string;
    adress: string;
    company: Company;
}
declare type DeepPartial<T> = {
    [U in keyof T]?: T[U] extends object ? DeepPartial<T[U]> : T[U];
};
declare type PartialPerson = DeepPartial<Person>;
declare type MyExclude<T, U> = T extends U ? never : T;
declare type T = MyExclude<1 | 2, 1 | 3>;
declare function pick<T, K extends keyof T>(o: T, names: K[]): T[K][];
declare let result: string[];

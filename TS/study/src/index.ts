let a:number = 100;
a = 'hello world';

let b: never [] = [];
b = [];

enum Directtion {
    'Up' = 1,
    'DOwn',
    'Left',
    'Right'
}

class IndexPage{
    state = {
        data: [],
        duration: 100,
        delay: 10
    }
}


interface PropsType<T, U>{
    (e: T): U
}


class Stack<T> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}


type partial<T> = { [K in keyof T]?: T[K] }

interface User {
    username: string
    id: number
    token: string
    avatar: string
    role: string
}

type partialUser = partial<User>


interface Company {
    id: number
    name: string
}

interface Person {
    id: number
    name: string
    adress: string
    company: Company
}

type DeepPartial<T> = {
    [U in keyof T]?: T[U] extends object
    ? DeepPartial<T[U]>
    : T[U]
};

type PartialPerson = DeepPartial<Person> 

type MyExclude<T, U> = T extends U ? never : T;
type T = MyExclude<1 | 2, 1 | 3> 

function pick<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}
let result = pick({name: '陈蔓杰'}, ['name'])
console.log('result...', result);
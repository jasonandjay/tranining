let a:number = 100;

a = "hello world";

let b:any = 200;

b = "hello world";

let c:unknown = 300;

c = "hello world ";

// console.log('unkown与any的区别...', b.animaition(), c.animation())

console.log('a...', a);

let e: Array<number | string> = [];

let f: number | string [] = [];
e.push('transition');

let g: [string, number, boolean, number []] = ['ac', 100, false, [1,2,3]];

/** 
 * [string, number] => interface Truple extends Array<string | number>{
 *  0: string,
 *  1: number,
 *  length: 2
 * }
 * 
 */

enum Direction{
    Top = 100,
    Down,
    Left,
    Right
}

console.log(Direction.Top, Direction[100])

interface AjaxType{
    code: number,   // 普通属性
    data?: AjaxType,  // 可有可无的属性
    readonly msg: string // 只读属性
    [key: string]: any,
    onClick?: ()=>void
} 

let h: AjaxType = {
    code: 200,
    list: [],
    data: {
        code: 1,
        msg: ''
    },
    msg: "接口请求成功"
}

h.msg = "接口请求失败";

class Props{
    home = {
        province: 'anhui',
        area: '10',
        number: 4
    }

    render(){
        return null;
    }
}

let p = new Props();
let i:Props = {}

// function add(a:number, b:number){
//     return a+b;
// }

function add(a:number, b:number, c:number){
    return a+b;
}

// add(1,2);

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([100, false]);

interface PropsType<T, U>{
    (e: T): U
}


// 泛型栈
class Stack<T> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}

let stack = new Stack<number>();
stack.push(1000);

function pick<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

let vals = pick({name: "chenmanjie", age: '100', treasure: '1'}, ['age'])
console.log('vals...', vals);

interface A{
    a: string
}

interface B{
    b: number
}

// 交叉类型
let j: A&B = {
    a: 'Hello',
    b: 100
}

// 联合类型
let k: number | string | undefined | null = null;

interface F{
    (): string
}
// 类型别名
type Chenmanjie = number | string | F;

let l: Chenmanjie = ()=>{
    return 'h'
}
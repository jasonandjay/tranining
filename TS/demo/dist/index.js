"use strict";
var a = 100;
a = "hello world";
var b = 200;
b = "hello world";
var c = 300;
c = "hello world ";
// console.log('unkown与any的区别...', b.animaition(), c.animation())
console.log('a...', a);
var e = [];
var f = [];
e.push('transition');
var g = ['ac', 100, false, [1, 2, 3]];
/**
 * [string, number] => interface Truple extends Array<string | number>{
 *  0: string,
 *  1: number,
 *  length: 2
 * }
 *
 */
var Direction;
(function (Direction) {
    Direction[Direction["Top"] = 100] = "Top";
    Direction[Direction["Down"] = 101] = "Down";
    Direction[Direction["Left"] = 102] = "Left";
    Direction[Direction["Right"] = 103] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Top, Direction[100]);
var h = {
    code: 200,
    list: [],
    data: {
        code: 1,
        msg: ''
    },
    msg: "接口请求成功"
};
h.msg = "接口请求失败";
var Props = /** @class */ (function () {
    function Props() {
        this.home = {
            province: 'anhui',
            area: '10',
            number: 4
        };
    }
    Props.prototype.render = function () {
        return null;
    };
    return Props;
}());
var p = new Props();
var i = {};
// function add(a:number, b:number){
//     return a+b;
// }
function add(a, b, c) {
    return a + b;
}
// add(1,2);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([100, false]);
// 泛型栈
var Stack = /** @class */ (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack.prototype.pop = function () {
        this.arr.pop();
    };
    return Stack;
}());
var stack = new Stack();
stack.push(1000);
function pick(o, names) {
    return names.map(function (n) { return o[n]; });
}
var vals = pick({ name: "chenmanjie", age: '100', treasure: '1' }, ['age']);
console.log('vals...', vals);
// 交叉类型
var j = {
    a: 'Hello',
    b: 100
};
// 联合类型
var k = null;
var l = function () {
    return 'h';
};

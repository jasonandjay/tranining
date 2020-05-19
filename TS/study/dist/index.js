var a = 100;
a = 'hello world';
var b = [];
b = [];
var Directtion;
(function (Directtion) {
    Directtion[Directtion["Up"] = 1] = "Up";
    Directtion[Directtion["DOwn"] = 2] = "DOwn";
    Directtion[Directtion["Left"] = 3] = "Left";
    Directtion[Directtion["Right"] = 4] = "Right";
})(Directtion || (Directtion = {}));
var IndexPage = /** @class */ (function () {
    function IndexPage() {
        this.state = {
            data: [],
            duration: 100,
            delay: 10
        };
    }
    return IndexPage;
}());
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
function pick(o, names) {
    return names.map(function (n) { return o[n]; });
}
var result = pick({ name: '陈蔓杰' }, ['name']);
console.log('result...', result);

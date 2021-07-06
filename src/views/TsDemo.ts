// js的类型属于动态类型，可以随意改变
// let a = '123';
// a = 123; //在ts下会报错

// ts的类型属于静态类型，无法随意改变
let a: number = 123;
a = 456;

interface NumPoint {
  x: number,
  y: number
}
const count: NumPoint = {
  x: 1,
  y: 44
}
console.log('NumPoint', count.x + count.y);

// 函数定义方式
// type point = {x: number, y: number};
interface Point {x: number, y: number};

function tsdemo(data: Point) {
  return data.x + data.y;
}

console.log(tsdemo({x: 1, y: 2}));

//----------------------------------- ts的类型 ----------------------------------------

//----------------------------------- 基础类型: String, Number, Boolean, void, undefined, symbol, null ----------------------------------------
const num: Number = 123;
const teacherName: String = 'dell';
let temp: number | string = 123;
temp = '123';

//----------------------------------- 对象类型: {}, Class, function, [] ----------------------------------------
const teacher: {
  name: String,
  age: Number
} = {
  name: 'dell',
  age: 18
}

const numbers: number[] = [1, 2, 3]; // 数组number类型

class Person {};
const deal: Person = new Person(); // 类函数类型

const getTotal: () => number = () => { // 函数返回值必须是number类型
  return 123;
}

//---------------------------------------- type annotation 类型注解，我们来告诉TS变量是什么类型 ----------------------------------------
let number1: number;
number1 = 123;

//---------------------------------------- type inference 类型推断，TS会自动的去尝试分析变量的类型 ----------------------------------------
let number2 = 222;

// 如果TS能够自动分析变量类型，我们就什么也不需要做了
// 如果TS无法分析变量类型的话，我们就需要使用类型注解了 -> 如函数传参，形参的参数是需要类型注解的


//----------------------------------------函数相关类型----------------------------------------
function add(first: number, second: number): number { // ": number" 函数的返回值应该是数字
  return first + second;
}

// ": void" 函数的返回值应该是空
function sayHello(): void { 
  console.log('hello');
  // return 123; 会报错，提示返回值应该是空
}

// ": never" 这个函数永远不能执行完成
function errorEmitter(): never { 
  // throw new Error();
  // console.log(123);
  while(true) {};
}

// "{ fit, sec } : { fit: number, sec: number }" 解构类型注解写法
function cdd({ fit, sec } : { fit: number, sec: number }): number { 
  return fit + sec;
}

cdd({ fit: 1, sec: 2 });

//---------------------------------------- 数组和原数组 ----------------------------------------
// arr 下的数组类型既可以是number也可以是string
const arr: (number | string)[] = [1,2,3,'4']; 

// type alias 类型别名
type User = {name: string, age: number};

const objectArrs: User[] = [
  {
    name: 'xxx',
    age: 18,
    // gender: '男' 提示错误，未在类型注解中声明
  }
]

//---------------------------------------- 元组 ----------------------------------------
const teacherInfo: [string, string, number] = ['1', '2', 3];

// csv、excel的数据类型可以用元组来管理
const teacherarrs: [string, string, number][] = [
  ['a', 'b', 10],
  ['c', 'd', 11],
  ['e', 'f', 12]
]

//-------------------------------------  interface  ------------------------------------
//interface 和 type 相类似，但并不完全一致
//使用type的话可以直接定义类型注解 如：type Person = string;
interface Person {
  // readonly name: string; 只读属性，不能修改
  name: string;
  age?: number; // 可有可无属性
  [propName: string]: any; // 可添加其他属性,属性的值可以是任何类型(any)
  say(): string; // 接口的返回值必须是个字符串
}

const getPersonName = (people: Person): void => {
  console.log(people.name);
}

// const setPersonName = (people: Person, name: string): void => {
//   people.name = name;
// }

const setPersonName = (people: Teacher1, name: string): void => {
  people.name = name;
}

const people1 = {
  name: 'dell',
  age: 18,
  say() {
    return 'say hello';
  },
  teach() {
    return 'teach'
  }
}

getPersonName(people1);
setPersonName(people1, 'lee');

// 这个类去应用上面Person的接口
class User1 implements Person { 
  name = 'kobe';
  say() {
    return 'hello';
  }
}

// 这个Teacher1继承上面Person的接口
interface Teacher1 extends Person {
  teach(): string;
}

// 定义一个函数的类型声明
interface SayHi {
  (word: string): string; // 必须接收一个string的参数和返回string值
}

const sayhh: SayHi = (word: string) => {
  return word;
}

//-------------------------------------  类的定义与继承  ------------------------------------
//-------------------------------------  使用ts实现单例模式  ------------------------------------
class Demo {
  private static instance: Demo;
  private constructor(public name: string) {};

  static getInstance() {
    if(!this.instance) {
      this.instance = new Demo('dell li');
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);

//-------------------------------------  抽象类  ------------------------------------
// 抽象类只能被继承，不能被实例化, 将类通用的相关的方法抽象出来
abstract class Geom {
  width: number | undefined;
  getType() {
    return 'Gemo';
  }
  abstract getArea(): number;
}

class Cirtcle extends Geom {
  // 子类继承的抽象类里面如果有抽象方法的话需要把抽象方法自己实现一下
  getArea() {
    return 123;
  }
}

class Square {
  getArea() {

  }
}

class Triangle {
  getArea() {

  }
}
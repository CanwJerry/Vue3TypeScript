//----------------------------------- ts的进阶 ----------------------------------------
//----------------------------------- 联合类型、类型保护 -------------------------------
interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  break: () => {};
}

function trainAnial(animal: Bird | Dog) { // 联合类型
  // 联合类型的情况下没法保证sing这个方法一定在animal上存在
  // 只有联合类型才会出现调用报错的问题👇，解决这种问题就是通过类型保护的方式
  // animal.sing();

  // 类型保护
  // 断言方式
  // if(animal.fly) {
  //   (animal as Bird).sing();
  // }else {
  //   (animal as Dog).break();
  // }

  // in语法
  if('sing' in animal) {
    animal.sing();
  }else {
    animal.break();
  }
}

// 利用typeof的语法来做类型保护
function add(first: string | number , second: string | number) {
  if(typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  }
  return first + second;
}

// 使用 instanceof 语法来做类型保护
class NumberObj {
  count: number;

  constructor(count: number) {
    this.count = 0;
  }
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
  // 只有class操作符才能使用instanceof，interface是无法使用instanceof的
  if(first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}

//----------------------------------- ENUM枚举类型 ----------------------------------------
enum Status {
  OFFLINE = 1,
  ONLINE,
  DELETED
}

// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2
// }

console.log(Status);
console.log(Status.OFFLINE);
console.log(Status[0]);

//----------------------------------- 函数泛型 ----------------------------------------
// 泛型 generic 泛指的类型
function join<ABC>(first: ABC, second: ABC) {
  return `${first}${second}`;
}

join<String>('1', '1');


function map<T>(params: T[]) {   // abc[] 等价于 Array<abc>; 常用T代表泛型
  return params;
}

map<string>(['123']);


function dobule<A, B>(first: A, second: B) {
  return `${first}${second}`;
}

// dobule<string, number>('1', 2);
dobule('1', 2); // ts会自动推断类型是什么

//----------------------------------- 类中的泛型以及泛型类型 -------------------------------------
// class DataManager {
//   constructor(private data: string[] | number[]) {};

//   getItem(index: number): string | number {
//     return this.data[index];
//   }
// }

// const data = new DataManager([1]);
// data.getItem(1);

interface Item {
  name: string;
}

// class DataManager<T extends string | number> {
class DataManager<T extends Item> {
  constructor(private data: T[]) {};

  getItem(index: number): string{
    return this.data[index].name;
  }
}

const data = new DataManager([{name: 'kobe'}]);
data.getItem(1);

// 如何使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
  return params;
}

const func: <T>(params: T) => T = hello; // 使用泛型作为类型，并且返回值也是泛型类型

//----------------------------------- 命名空间 - namespace -------------------------------------
///<reference path='./components.ts' /> 命名空间之间相互依赖的方式
// 或者使用import直接引入

namespace Home {
  export class Header {
    constructor() {
      let ele = document.createElement('div');
      ele.innerHTML = 'this is header';
      document.body.appendChild(ele);
    }
  }
}

//----------------------------------- 定义全局变量和函数 -------------------------------------
// 定义全局变量
// declare var $: (param: () => void) => void;

// 定义全局函数
// interface jjj { html: (html: string) => jjj; }

// 函数重载
// declare function $(param: () => void): void;
// declare function $(param: string): jjj

// 如何对对象进行类型定义，以及对类进行类型定义，以及命名空间的嵌套
// declare namespace $ {
//   namespace fn {
//     class init {}
//   }
// }

// 使用interface的语法，实现函数重载
// interface JQuery {
//   (readyFunc: () => void): void;
//   (selector: string): jjj;
// }
// declare var $: JQuery;

// ES6 模块化
declare module 'jquery' {
  interface jjj { html: (html: string) => jjj; }

  // 混合类型
  function $(param: () => void): void;
  function $(param: string): jjj
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}

//----------------------------------- 泛型中keyof语法的使用 -------------------------------------
interface Personss {
  name: string;
  ages: number;
  gender: string;
}
class Teachersss {
  constructor(private info: Personss) {};
  // getInfo(key: string) {
  //   if(key === 'name' || key === 'ages' || key === 'gender') {
  //     return this.info[key];
  //   }
  // }

  // 使用keyof
  getInfo<T extends keyof Personss>(key: T): Personss[T] {
    return this.info[key];
  }
}

const teachers = new Teachersss({
  name: 'dell',
  ages: 18,
  gender: 'male'
});

const test = teachers.getInfo('ages');
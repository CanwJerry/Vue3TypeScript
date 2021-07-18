//----------------------------------- 类的装饰器 ----------------------------------------
// 装饰器本身是一个函数
// 类装饰器接收的参数是构造函数
// 装饰器通过 @ 符号来使用
// function testDecorator(flag: boolean) {
//   if(flag) {
//     return function testDecorator1(constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log('dell');
//       }
//     };
//   }else {
//     return function testDecorator1(constructor: any) {}
//   }
// }

// function testDecorator2(constructor: any) {
//   console.log('testDecorator1');
// }

// @testDecorator(true)
// @testDecorator2

// class Test {}

// const text = new Test();
// (text as any).getName();

// function testDecorator() {
//   return function <T extends new (...args: any[]) => any>(constructor: T) {
//     return class extends constructor {
//       name = 'lee';
//       getName() {
//         return this.name;
//       }
//     };
//   }
// }

// const Test = testDecorator() {
//   class {
//     name: string;
//     constructor(name: string) {
//       this.name = name;
//     }
//   }
// }


// const text = new Test('dell');
// console.log(text);

//----------------------------------- 方法装饰器  -----------------------------------
// 普通方法，target 对应的是类的 prototype
// 静态方法，target 对应的是类的构造函数

// function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//   // console.log(target, key);
//   // descriptor.writable = false;
//   descriptor.value = function () {
//     return 'descriptor'
//   }
// }

// class Test {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   @getNameDecorator
//   // 静态方法，target 对应的是类的构造函数
//   // static getName() {
//   //   return '123';
//   // }
//   // 普通方法，target 对应的是类的 prototype
//   getName() {
//     return this.name;
//   }
// }

// const text = new Test('dell');
// console.log(text.getName());

//----------------------------------- 访问器的装饰器  -----------------------------------
// function visitDecorator(target:any, key: string, descriptor: PropertyDescriptor) {
  
// }

// class Test {
//   private _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   @visitDecorator
//   set name(name: string) {
//     this._name = name;
//   }
// }

// const text = new Test('dell lee');
// console.log(text.name);

//----------------------------------- 属性的装饰器  -----------------------------------
// function nameDecorator(target:any, key: string) {
//   console.log(target, key);
// }

// // 使用属性装饰器并有没有办法直接去修改这个属性，原因是你修改的实际上是原型上的值

// class Test {
//   @nameDecorator
//   // 这样直接定义的属性是存储在类声明的实例上的
//   // 所以修改原型上的东西并不会对实例上的属性有所变更，是没办法直接修改实例上的属性值得
//   name = 'less sss';
// }

// const text = new Test();
// console.log(text.name);

//----------------------------------- 参数的装饰器  -----------------------------------
// 原型，方法名，参数所在的位置
// function paramsDecorator(target: any, method: string, paramIndex: number) {
//   console.log(target, method, paramIndex)
// }

// class Test {
//   getInfo(name: string, @paramsDecorator age: number) {
//     console.log(name, age);
//   }
// }

// const text = new Test();
// text.getInfo('dell', 30);

//----------------------------------- 装饰器实际使用例子  -----------------------------------
const userInfos: any = undefined;

function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function() {
      try {
        fn();
      }catch(e) {
        console.log(msg);
      }
    }
  }
}

class Testss {
  @catchError('userInfos.name 不存在')
  getName() {
    return userInfos.name;
  }
  @catchError('userInfos.age 不存在')
  getAge() {
    return userInfos.age;
  }
  @catchError('userInfos.gentle 不存在')
  gentle() {
    return userInfos.gentle;
  }
}

const textss = new Testss();
text.getName();
text.getAge();
text.gentle();
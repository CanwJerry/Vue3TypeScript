// 类的只读属性
// class Persona {
//   public readonly _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
// }

// const persona = new Persona('谢广坤');
// persona._name = 'jjj';
// console.log(persona._name);

// 抽象类
abstract class Girl {
  abstract skill() : any;
}

class Waiter {
  skill() {
    console.log('喝水');
  }
}

class BaseTeacher {
  skill() {
    console.log('按摩');
  }
}

class seniorTeacher {
  skill() {
    console.log('正骨');
  }
}

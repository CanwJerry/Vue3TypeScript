// class Personsss {
//   public name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

class Personsss {
  constructor(public name: string) {}
}

class Teacherssss extends Personsss {
  constructor(public age: number) {
    // 只要在子类中使用了构造函数就要调用super，就算父类没有写构造函数
    super('teach');
  }
}

const person = new Personsss('jspang');

const teachs = new Teacherssss(18);
console.log(teachs.name);
console.log(teachs.age);

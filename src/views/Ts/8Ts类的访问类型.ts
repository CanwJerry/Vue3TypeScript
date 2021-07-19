// 访问类型
// private (只能在类的内部使用)
// public (在类的内部和外部都可以使用)
// protected (在类的内部和继承关系中可以使用，外部不能使用)

// 类的内部（类的大括号之内）和类的外部
class Persons {
  // public 默认
  public name: string | undefined;
  public sayHello() {
    console.log(this.name + 'say hello');
  }
  
  // proteced
  protected age: number | undefined;
}

class Teacher extends Persons {
  sayGood() {
    return this.age;
  }
}

const persons = new Persons();
persons.name = 'jspang'
persons.age = 18
persons.sayHello();
console.log(persons.name);
class Dajiejie {
  constructor(private _age: number) {}

  get age() {
    console.log('1', this._age);

    return this._age - 10
  }

  set age(age: number) {
    console.log('2', age);

    this._age = age + 3
  }
}

const dajiejies = new Dajiejie(28);
dajiejies.age = 25
console.log('3', dajiejies.age);

// 静态类 static
// 静态属性就是说我们不需要new一个对象，可以直接通过类名(Gg)，直接调用里面的方法
class Gg {
  static sayLove() {
    return 'ilu'
  }
}

// const gl = new Gg();
// console.log(gl.sayLove());
console.log(Gg.sayLove());
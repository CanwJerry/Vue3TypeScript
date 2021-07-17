class Ladys {
  constent = 'hi';
  sayhello() {
    return this.constent;
  }
}

class Xiaojiejies extends Ladys {
  sayLove() {
    return 'ilu'
  }

  // 重写sayhello 并使用super关键字
  sayhello() {
    return super.sayhello() + '你好'
  }
}

const goddess = new Xiaojiejies();
console.log(goddess.sayhello());
console.log(goddess.sayLove());
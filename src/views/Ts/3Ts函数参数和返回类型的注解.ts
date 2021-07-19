// 函数参数和返回类型的注解
// 函数类型的返回注解
// function getCount (one: number, two: number) : number {
//   return one + two;
// }
// const totals = getCount(1, 2);

function sayHellos() : void{ //void 没有返回值
  console.log('hello world');
}

function errorFunction() : never{ //never 永远执行不完
  throw new Error();
  console.log('hello world');
}

function forNever() : never{ //never 永远执行不完
  while(true) {};
  console.log('hello world');
}

// 对象的类型注解写法
function addas({one, two} : {one : number, two : number}) {
  return one + two;
}
const totalss = addas({one: 1, two: 2});

function getNumber({one} : {one: number}) {
  return one;
}
const oness = getNumber({one: 1});
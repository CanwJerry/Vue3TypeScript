// 泛型
function join<T, P>(first: T, second: P) {
  return `${first}${second}`
}

join<string, number>('js', 1);

// 类型推断写法，不建议这样写
join('js', 1);

// 泛型中数组的使用
function myFun<T>(params: T[]) {
  return params;
}

myFun<string>(['1', '2']);
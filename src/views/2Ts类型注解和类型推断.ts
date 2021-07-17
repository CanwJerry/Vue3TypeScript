// 类型注解和类型推断
// 如果ts能够自动分析变量类型，我们就什么也不需要做了
// 如果ts无法分析变量类型的话，我们就需要使用类型注释

// type annotation 类型注解
// type interface 类型推断

let counts : number;
counts = 123;

// type interface 类型推断
const one = 1;
const two = 2;
const three = one + two;

// type annotation 类型注解
function getTotals(one: number, two: number) {
  return one + two;
}
const total = getTotals(1, 2);


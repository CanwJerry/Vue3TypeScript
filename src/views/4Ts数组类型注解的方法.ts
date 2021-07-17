const numberArr : number[] = [1, 2, 3];

const stringArr : string[] = ['a', 'b', 'c'];

const undefinedArr : undefined[] = [undefined, undefined];

const arrs : (number | string)[] = [1, 'string', 2];

// type alias 类型别名
type Lady = {name: string, age: number};

class Madam {
  name: string | undefined;
  age: number | undefined;
} 

const xiaojiejies : Madam[] = [
  {name: '刘勇', age: 18},
  {name: '谢大脚', age: 19},
]
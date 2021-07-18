// 静态类型
// 基础静态类型
let count2: number = 1;

interface XiaoJieJie {
  uname: String,
  age: Number
}

const xiaohong: XiaoJieJie = {
  uname: '小红',
  age: 18
}

// 对象类型，数组类型，类类型，函数类型
// 对象类型
const xiaohuang: {
  name: String,
  age: Number
} = {
  name: '123',
  age: 456
};

// 数组类型
const xiaobing: string[] = ['name', 'age'];

// 类类型
class Personss {};
const dajiao: Personss = new Personss();

// 函数类型
const dajiaoya: () => String = () => { return 'name' };
// 传统写法
// const screenResume = (name: string, age: number, bust:number) => {
//   age < 24 && bust >= 90 && console.log(name + '进入面试');
//   age >= 24 || bust < 90 && console.log(name + '你被淘汰');
// }

// const getResume = (name: string, age: number, bust:number) => {
//   console.log(name + '年龄是' + age);
//   console.log(name + '胸围是' + bust);
// }

// screenResume('大脚', 18, 94);
// getResume('大脚', 18, 94);

// 利用ts修改
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline ?: number; //可有可没有的值，只需要在冒号前面加一个问好
  [propname: string]: any; // [propname: string]：any 可以直接写任何东西,不受约束,属性名是string类型,“any”值可以是任何类型
  say(): string; // 接口里面也可以给他一个方法，并且确定返回值
}

// interface 继承
interface Teacher extends Girl {
  teach(): string;
}

// 类型别名是可以直接给他赋值一个类型别名的， interface必须是大括号形式，并且传递的值必须是一个对象
// 接口不止可以限制对象，还可以限制类
// type Girl1 = string;

class Xiaojiejie implements Girl {
  name = '刘英';
  age = 18;
  bust = 94;
  say() {
    return "欢迎"
  }
}

const girl = {
  name: 'xiedajiao',
  age: 20,
  bust: 94,
  waistline: 21,
  sex: '女',
  say() {
    return "欢迎光临"
  },
  teach() {
    return '我来教你如何做'
  }
}

const screenResume = (girl : Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试');
  girl.age >= 24 || girl.bust < 90 && console.log(girl.name + '你被淘汰');
}

const getResume = (girl : Teacher) => {
  console.log(girl.name + '年龄是' + girl.age);
  console.log(girl.name + '胸围是' + girl.bust);
  girl.waistline && console.log(girl.name + '胸围是' + girl.waistline);
  girl.sex && console.log(girl.name + '性别是' + girl.sex);
}

screenResume(girl);
getResume(girl);

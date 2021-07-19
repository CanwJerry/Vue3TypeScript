// class SelectGirl{
//   constructor(private girls: string[] | number[]) {}
//   getGirls(index: number): string | number {
//     return this.girls[index];
//   }
// }

// const selectGirl = new SelectGirl(['大脚', '孙俪', '小红']);
// console.log(selectGirl.getGirls(1));

// 泛型在类中的使用
// class SelectGirl<T>{
//   constructor(private girls: T[]) {}
//   getGirls(index: number): T {
//     return this.girls[index];
//   }
// }

// const selectGirl = new SelectGirl<string>(['大脚', '孙俪', '小红']);
// console.log(selectGirl.getGirls(1));

// 泛型的继承
// interface Girlss {
//   name: string;
// }

// class SelectGirl<T extends Girlss>{
//   constructor(private girls: T[]) {}
//   getGirls(index: number): string {
//     return this.girls[index].name;
//   }
// }

// const selectGirl = new SelectGirl([
//   {name: '大脚'},
//   {name: '孙俪'},
//   {name: '刘英'}
// ]);
// console.log(selectGirl.getGirls(2));

// 泛型的约束
class SelectGirl<T extends number | string>{
  constructor(private girls: T[]) {}
  getGirls(index: number): T {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl<string>(['大脚', '孙俪', '小红']);
console.log(selectGirl.getGirls(1));
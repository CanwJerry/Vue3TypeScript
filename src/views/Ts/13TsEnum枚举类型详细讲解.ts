// function getServe(status: number) {
//   if(status === 0) {
//     return 'message';
//   }else if(status === 1) {
//     return 'spa';
//   }else if(status === 2) {
//     return 'dbj';
//   }
// }

// const result = getServe(0);
// console.log(result);

// 枚举类型
enum Status {
  message = 1, //设置值得索引
  spa,
  dbj
}

function getServe(status: number) {
  if(status === Status.message) {
    return 'message';
  }else if(status === Status.spa) {
    return 'spa';
  }else if(status === Status.dbj) {
    return 'dbj';
  }
}

const result = getServe(0);
console.log(result);

console.log(Status.message);
console.log(Status.spa);
console.log(Status.dbj);

console.log(Status[1]);
console.log(Status[2]);
console.log(Status[3]);
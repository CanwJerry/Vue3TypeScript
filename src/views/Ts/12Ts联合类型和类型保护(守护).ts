// 只有有联合类型存在的情况下才需要类型保护
interface Waiteraa {
  anjiao: Boolean;
  say:() => {};
}

interface Teacheraa {
  anjiao: Boolean;
  skill: () => {};
}

// 断言方式 as
function judgeWho(animal: Waiteraa | Teacheraa) {
  if(animal.anjiao) {
    (animal as Teacheraa).skill();
  }else {
    (animal as Waiteraa).say();
  }
}

// in的方式
function judgeWho2(animal: Waiteraa | Teacheraa) {
  if("skill" in animal) {
    animal.skill();
  }else{
    animal.say();
  }
}

// typeof方式
function judgeWho3(first: string | number, second: string | number) {
  if(typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }

  return first + second;
}

// 使用instanceof 而且 instanceof只能使用在类上
class NumberObjs {
  counta: number | undefined;
}

function adds(first: object | NumberObjs, second: object | NumberObjs) {
  if(first instanceof NumberObjs && second instanceof NumberObjs) {
    return first.counta + second.counta;
  }
  return 0;
}
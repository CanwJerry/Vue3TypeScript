interface Personss {
  name: string;
  ages: number;
  gender: string;
}
class Teachersssss {
  constructor(private info: Personss) {};
  // getInfo(key: string) {
  //   if(key === 'name' || key === 'ages' || key === 'gender') {
  //     return this.info[key];
  //   }
  // }

  // 使用keyof
  getInfo<T extends keyof Personss>(key: T): Personss[T] {
    return this.info[key];
  }
}

const teacherssss = new Teachersssss({
  name: 'dell',
  ages: 18,
  gender: 'male'
});

const testaa = teachers.getInfo('ages');
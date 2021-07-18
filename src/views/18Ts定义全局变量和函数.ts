// 定义全局变量
// declare var $: (param: () => void) => void;

// 定义全局函数
// interface jjj { html: (html: string) => jjj; }

// 函数重载
// declare function $(param: () => void): void;
// declare function $(param: string): jjj

// 如何对对象进行类型定义，以及对类进行类型定义，以及命名空间的嵌套
// declare namespace $ {
//   namespace fn {
//     class init {}
//   }
// }

// 使用interface的语法，实现函数重载
// interface JQuery {
//   (readyFunc: () => void): void;
//   (selector: string): jjj;
// }
// declare var $: JQuery;

// ES6 模块化
declare module 'jquery' {
  interface jjj { html: (html: string) => jjj; }

  // 混合类型
  function $(param: () => void): void;
  function $(param: string): jjj
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}
namespace Components {
  // 子命名空间(命名空间嵌套)
  export namespace SubComponents {
    export class Son {

    }
  }

  export class Headers {
    constructor() {
      const ele = document.createElement('div');
      ele.innerHTML = "这是HEADER"
      document.body.appendChild(ele);
    }
  }

  export class Content {
    constructor() {
      const ele = document.createElement('div');
      ele.innerHTML = "这是CONTENT"
      document.body.appendChild(ele);
    }
  }

  export class Footer {
    constructor() {
      const ele = document.createElement('div');
      ele.innerHTML = "这是FOOTER"
      document.body.appendChild(ele);
    }
  }
}

// 另一个文件的使用
export class Page {
  constructor() {
    new Components.Headers();
    new Components.Content();
    new Components.Footer();
  }
}
namespace Home {
  class Headers {
    constructor() {
      const ele = document.createElement('div');
      ele.innerHTML = "这是HEADER"
      document.body.appendChild(ele);
    }
  }

  class Content {
    constructor() {
      const ele = document.createElement('div');
      ele.innerHTML = "这是CONTENT"
      document.body.appendChild(ele);
    }
  }

  class Footer {
    constructor() {
      const ele = document.createElement('div');
      ele.innerHTML = "这是FOOTER"
      document.body.appendChild(ele);
    }
  }

  export class Page {
    constructor() {
      new Headers();
      new Content();
      new Footer();
    }
  }
}

// 在外面引入 然后使用 new Home.Page();
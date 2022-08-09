window.jQuery = function (selectorOrArray) {
  //第二步  ：同时接受选择器和数组
  var elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    // 第三部 新的element ，修改提升作用域。作用域在花括号内
    elements = selectorOrArray;
  }
  //api可以操作elements，api是一个对象；
  return {
    //闭包，函数访问外部的变量
    addClass(className) {
      debugger;
      console.log(elements);
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
      }
      return this;
    },

    find(selector) {
      debugger;
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        const elements2 = Array.from(elements[i].querySelectorAll(selector));
        array = array.concat(elements2);
      }
      array.oldApi = this; //this 是旧的api1
      //第一步
      const newApi = jQuery(array);
      return newApi;
      //重新创建一个子元素的对象，也就是数组对象api，需要jQuery构造出来.这个过程叫封装对象。
      //step3
      //现在只修改子元素，添加属性，同时需要判断

      //step 1
      /* return array
        //step2
        //return array 改为 return this=api
        //（这个api是find之前一个对象返回的，所以在父元素上修改添加属性） */
    },
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i);
      }
      return this;
    },
    parent() {
      const array = [];
      this.each((node) => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(node.parentNode);
        }
      });
      return jQuery(array);
    },
    print() {
      console.log(elements);
    },
    oldApi: selectorOrArray.oldApi,
    end() {
      return this.oldApi; // 新的api2
    },
    children() {
      const array = [];
      this.each((node) => {
        array.push(...node.children); //把元素拆开（node.children1,node.children2)
      });
      return jQuery(array);
    },
  };
};
//直接返回API这个对象

// （const = api
//   api = {
/*  addClass(className){
              for(let i=0;i<elements.length;i++){     
              elements[i].classList.add(className)
          }
          return this = api
        }
      } */

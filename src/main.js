// const api =jQuery('.test')

/* jQuery('.test')//不返回元素，返回api
//api(可以省略直接写下面的代码，注意'.')
.addClass('red')//this 就是 api
.addClass('blue')//this 就是 api  
.addClass('green')//this 就是 api （链式操作）
 */

//obj.fn(p1)
//obj.fn.call(obj,p1)//this = obj = api

//var obj = new Object() //常规 构造函数
jQuery(".test")
  .find(".child")
  .addClass("red")
  .addClass("green")
  .end()
  .addClass("yellow");

const x = jQuery(".test").find(".child");
x.each((div) => console.log(div)); // x 是child函数的api
//fn 函数
x.children().print();

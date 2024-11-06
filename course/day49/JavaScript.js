/*
 * @Description: 
 * @Author: FallCicada
 * @Date: 2024-11-06 16:50:37
 * @LastEditors: FallCicada
 * @LastEditTime: 2024-11-06 17:37:15
 * @: 無限進步
 */


console.log("Hello World");
console.log('javaScript双引号可以嵌套单引号 :>> ', "javaScript双引号可以嵌套单引号");
//声明一个变量
var a;
//初始化变量（赋值）a
a = 7;
//输出a
console.log(a);

//输出a
console.log("🚀 FallCicada ~> a:",a);
//修改变量a的值
a = "你好";
console.log("🚀 FallCicada ~> a:",a);

{
    var b = 10;
    
    console.log("🚀 FallCicada ~> b:",b);
    let c = 20;
    console.log("🚀 FallCicada ~> c:",c);
}
console.log("🚀 FallCicada ~> b:",b);
// let声明的变量有局部作用域，只在当前代码块有效
// console.log("🚀 FallCicada ~> c:",c);
// 声明一个常量
const d = 30;
console.log("🚀 FallCicada ~> d:",d);
console.log(typeof(d));
// d = 40;
// const声明的变量不可修改
let e = 100;

// let e = 100;
// let声明的变量不可重复声明
console.log("🚀 FallCicada ~> typeof a:",a);
console.log("🚀 FallCicada ~> typeof b:",b);
console.log("🚀 FallCicada ~> typeof c:",c);
console.log("🚀 FallCicada ~> typeof d:",d);
console.log("🚀 FallCicada ~> typeof e:",e);
console.log("🚀 FallCicada ~> typeof f:",f);

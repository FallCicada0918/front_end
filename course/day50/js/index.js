

let age=20;//number
let _age="20"; //String           //临时变量
let $age=20;
//age==_age

console.log('🚀 FALLCICADA ~> age==_age:', age==_age);//true  值相等
console.log('🚀 FALLCICADA ~> age===_age:', age===_age);//false 类型，值都相等
console.log('🚀 FALLCICADA ~> age==$age:', age==$age);//true
console.log('🚀 FALLCICADA ~> age===$age:', age===$age);//true

//其他类型转化为数值类型
parseInt("20");
console.log('🚀 FALLCICADA ~> parseInt("20"):', parseInt("20"))
console.log('🚀 FALLCICADA ~> parseInt("20");:', parseInt("20Abc"));
console.log('🚀 FALLCICADA ~> parseInt("20");:', "20");
//其他类型转化为boolean类型
if (0) {
  console.log("0的转换结果");
}
if (100) {
  console.log("100的转换结果");
}
if (NaN) {
  console.log("NaN的转换结果");
}
if (undefined) {
  console.log("undefined的转换结果");
}
if (null) {
  console.log("null的转换结果");
}
if ( "") {
  console.log(" 的转换结果");
}
// 0 NaN 转 boolean 的结果是false
// 其他类型 转 boolean的结果都是true
let str="false";
console.log("str:", str);
if (str) {
  console.log("代码执行")
}

var a= true;
var b= false;
var c=a+b;
var d=1+"a";
console.log('🚀 FALLCICADA ~> d:', d);
console.log('🚀 FALLCICADA ~> c:', c);

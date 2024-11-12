/*
 * @Description: 
 * @Author: FallCicada
 * @Date: 2024-11-08 14:51:33
 * @LastEditors: FallCicada
 * @LastEditTime: 2024-11-08 15:07:34
 * @: 無限進步
 */
var loginObj = {
    username: "admin",
    password: "12345"
  }
  console.log('🚀 FALLCICADA ~> loginObj.username:', loginObj.username); // admin
  console.log('🚀 FALLCICADA ~> loginObj.password:', loginObj.password); // 12345
  
  // json对象转json字符串
  var loginTxt = JSON.stringify(loginObj);
  console.log('🚀 FALLCICADA ~> loginObj:', loginObj);
  console.log('🚀 FALLCICADA ~> loginTxt:', loginTxt);
  // json字符串是序列化后的对象 
  // 是字符串 没有属性和值的概念
  console.log('🚀 FALLCICADA ~> loginTxt.username:', loginTxt.username);
  // 需要对json字符串进行反序列化
  // 才能拿到对应的属性和值
  var user = JSON.parse(loginTxt);
  // 这里的user就是一个js对象了
  console.log('🚀 FALLCICADA ~> user:', user);
  console.log('🚀 FALLCICADA ~> user.username:', user.username);
  
  // 前后台分离开发
  // class User{
  //   String username;
  //   String password;
  // }
  // User u1 = new User("admin", "12345");
  // u1 要进行序列化
  // {"username":"admin","password":"12345"}
  // 通过网络传输 前端拿到序列化后的字符串
  // 反序列化
  // var user = JSON.parse(xxx);
  // { username: 'admin', password: '12345' }
<!--
 * @Description: 
 * @Author: FallCicada
 * @Date: 2024-11-07 08:52:51
 * @LastEditors: FallCicada
 * @LastEditTime: 2024-11-12 16:11:10
 * @: 無限進步
-->

<!-- 页面主体结构 -->
<template>
    <h1>hello,vue</h1>
    <h1>模版语法</h1>
    <h2>文本插值 - 最基本的数据绑定形式 - 双大括号语法</h2>
    a:{{ a }}
    <h2>展示原始Html - 扫码支付 </h2>
    <div v-html="b"></div>
    <h2>html属性绑定</h2>
    <div id="app2">id为app2</div>
    <!-- <div v-bind:id="id3">id为app3</div> -->
    <!-- 与上面的写法具有相同的效果 -->
    <div :id="id3">id为app3</div>
    <h2>直接使用js表达式</h2>
    {{ 1 + 1 }}
    <br>
    {{ a + 1 }}
    <br>
    {{ 1 == 1 ? "yes" : "no" }}
    <h1>响应式数据</h1>
    <h2>声明响应式数据</h2>
    响应式数据在页面中的使用
    count:{{ count }}
    <br>
    响应式数据在js代码中使用
    count.value
    <!-- 一个使count自增的按钮 -->
    <button @click="count++">
      count++
    </button>
    <button @click="countAdd">
      countAdd
    </button>
    <!-- 一个使 a 自增的按钮 -->
    a:{{ a }}
    <button @click="a++">
      a++
    </button>
    <h1>类与样式的绑定</h1>
    <h2> class绑定 </h2>
    <button @click="changeActive">切换active</button>
    <!-- active是类名 isActive是一个boolean值-->
    <div class="myDiv myDiv2" :class="{
      active: isActive,
      'text_success': noError,
    }">class-对象方式绑定</div>
    <div :class="[isActive ? 'active' : 'noActive', 'arrClass']">
      class-数组方式绑定
    </div>
    <h2> style绑定 </h2>
    <p>style写css属性名，使用小驼峰命名法</p>
    <p>或者'font-size'</p>
    <div :style="{ color: activeColor, 'font-size': fontSize + 'px' }">style绑定 - {{ activeColor }}</div>
    <button @click="changeActiveColor('blue')">蓝色</button>
    <button @click="changeActiveColor('green')">绿色</button>
    <button @click="changeActiveColor('orange')">黄色</button>
    <button @click="changeActiveColor('black')">黑色</button>
  
    <h1>条件渲染</h1>
    <h2> v-if v-else </h2>
    <button @click="changeFlag">{{ flag }}</button>
    <div v-if="flag">白天 ☀️ </div>
    <div v-else>晚上 🌛</div>
    <p>
      v-if不满足条件时 dom会删除这个元素
      v-show不满足条件时 dom会隐藏这个元素
    </p>
    <div v-show="flag">云朵 ☁️</div>
  
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </template>
  
  <!-- 写js代码 -->
  <script setup>
  // 声明响应式数据
  import { ref } from 'vue'
  // ref()函数 用于声明响应式状态
  const isActive = ref(true);
  const noError = ref(true);
  const activeColor = ref("hotpink");
  const fontSize = "30";
  const flag = ref(true);
  // 声明一个初始值为0的响应式数据count
  const count = ref(0);
  // 响应式数据如果在js中使用 需要.value访问
  console.log('🚀 FALLCICADA ~> count:', count);
  console.log('🚀 FALLCICADA ~> count.value:', count.value);
  count.value++
  console.log('🚀 FALLCICADA ~> count.value:', count.value);
  // countAdd方法的声明
  function countAdd () {
    count.value++;
  }
  function changeActive () {
    isActive.value = !isActive.value;
  }
  function changeActiveColor (color) {
    activeColor.value = color;
  }
  function changeFlag () {
    flag.value = !flag.value;
  }
  // 声明一个变量a并且初始化
  var a = 10;
  var b = '<span style="color:red;">这个是一个文字为红色的span标签</span>';
  var id3 = 'app3';
  </script>
  
  <!-- 页面样式 -->
  <style scoped>
  .active {
    color: red;
    font-size: 26px;
  }
  
  .noActive {
    color: orange;
  }
  </style>
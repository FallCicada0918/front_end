<!--
 * @Description: 
 * @Author: FallCicada
 * @Date: 2024-11-12 17:35:46
 * @LastEditors: FallCicada
 * @LastEditTime: 2024-11-12 19:16:13
 * @: 無限進步
-->
<template>
    <!-- <div>
    <p>普通文本插值：{{ htmlContent }}</p>
    <p>使用 v-html 插入 HTML 内容：</p>
    <div v-html="htmlContent"></div>
  </div> -->
  <button v-on:click="greet('Hello, Vue!')">点击我</button>
</template>
  
  <script>
  export default {
  methods: {
    greet(message) {
      alert(message);
    }
  }
}
//   export default {
//     data() {
//         return {
//         htmlContent: '<h1>Hello, Vue.js!</h1><p>This is a <strong>bold</strong> text.</p>'
//         }
//     }
//   }
  </script>
  
  <style scoped>
  </style>
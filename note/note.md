# Html CSS JavaScript 前端三要素
## Html
>做网页结构、文本 主体内容 类似于人的身体 主体框架
## CSS
>做样式的 调整网页内容的颜色、大小等样式 类似于人着装或者妆容
## JavaScript 
>做网页交互 让网页动起来的内容 
## 软件架构
  B/S 
  
  C/S
## 网络协议
  http协议 请求、响应模型
  
  https 加密协议 http + ssl证书
## URL 
+ 统一资源定位符 像是每家每户的地址 URL是网页的地址
+ 格式：
  + 协议://ip:port/path/index.html
    + https://fanyi.baidu.com/index.html
    + http://124.223.22.76/chms/#/
    + http://124.223.22.76:80/chms/#/
    + http://124.223.22.76:80/chms/#/
    + 80是默认端口 可以省略
    + index.html 是默认首页 可以省略不写
    + 比如：
    + http://124.223.22.76
    + http://124.223.22.76:80/index.html
    + http://127.0.0.1:5500/day46/index.html
    + Apache2  httpd2
    + nginx 代理 访问A -> B
## 前后端分离开发
  jsp
  
  之前的开发模式 前后端代码耦合在一起 难以维护
## 前端开发环境
  VSCode 类似于idea
  
  NodeJS 类似于jdk
## 前端框架
  jQuery
  
  Vue React Angular
## 第三方组件库
  优点：样式好看、兼容性比较强，上手容易
  
  elementUI AntDesign Vant
## 原生移动端开发技术
  iOS Android 华为鸿蒙
## 混合移动端
  小程序（微信、QQ、支付宝、抖音、...）
  
  ReactNative 
  
  cordova
  
  uni-app
## 后端开发
  NodeJS
## 虚拟现实 数字孪生 51World 线上展厅
# HTML
  - 超文本标记语言
  - 超文本：超过了普通的文本，可以展示图片、视频、音频等动态的内容
  - 标记语言：区分于编程语言
  ### HTML5 
  - 后缀
  ```
    .html .htm
  ```
  VSCode自动生成html文档结构
    ! 按回车键（英文感叹号）
  注释 
  <!-- 告诉浏览器 Html的版本是H5 -->
  标签结构 &  常见元素 标签
    单标签 双标签(正常状态)
    body元素
    <body> 开始标签
      hello,world 内容
    </body> 结束标签
    标签的属性：
      全部元素都拥有的属性： 
        id    id不重复 主要是方便后期设置css样式进行选择
        在css选择器中用#表示
        class 一类元素 类名可以重复赋予元素 方便后期设置
        css样式进行选择
        在css选择器中用.表示
        style 样式 直接写css样式代码
        等
        title
      部分元素特有的属性
    ```html
        <img src="./img/image.png" width="88" height="88" alt="" />
        type="password" name="password"
    ```
    单标签
      <br></br>
      <br />
      <img src="" alt=""/>
    div h1 - h5 标题 p 等都是块级元素 独占整行空间 所以会有换行的效果
    span img a  行内元素 不会独占整行空间 会和其他行内元素共享一行空间
  表单 用于采集用户信息的功能组件
  网站打开方式
    浏览器地址栏输入URL 
    http://127.0.0.1:5500/day47/index.html
  不同浏览器之间html原生标签功能和显示是有差异的
  这就是浏览器的兼容性，所以企业级项目中，很少会用到原生标签
  语义化标签
    div 无意义的标签
    header
    footer
  提交from表单的两种方式
    get   
      优点：方便 快捷 简单 键值对形式
      缺点：暴露用户信息 后台不安全
    post
      优点：用户信息相对安全，地址栏看不到，但是请求体中也能看到，所以建议加密
      缺点：使用稍微复杂一点
  其他比较常见的标签
    ```html
        <option>
        <textarea>
        <form>
        <button>
    ```
# CSS
+ 层叠样式表 cascading style sheets
+ 是一种向网页中添加样式的机制 主要做页面美化和布局
+ 可以修饰html或者xml等文件
+  文件扩展名 .css
+ 根据高内聚低耦合的开发思路，在html中直接修改样式的一些属性和方法是不推荐使用的，所以样式尽量用css控制
  
  - 语法：
  ```css
    选择器 {
      /* 单行注释 */
      属性名：属性值；
      color:red;
      /* css速写 */
      属性名：属性值 属性值 属性值；
      border: 1px solid black;
    }
    ```
    - css属性和值之间用 : 分隔
    - css的属性有多个的值用 (空格)分隔
    - css的多个属性和值之间用;分隔
    - css 多选择器
   - 颜色：
    ```css 
    red yellow green black white 等
    十六进制表示法 三个通道 # 00 00 00 三个颜色 红绿蓝
      #000 表示黑色 和 #000000一致
      #fff 表示黑色 和 #ffffff、#FFFFFF一致 
      # 00 00 00 三通道可缩写 # 0  0  0
      透明色
      #ffffff00
      #ffffffff
    rgb
      rgb(0,0,0);
      rgb(255,255,255);
      rgba(0, 0, 0, 0); 
      最后一个值代表透明度 (0,1)
      0全透明 1不透明
    ```
  单位：
    px 绝对单位 像素点 类似与厘米、毫米
    %  相对单位 width:10%; 相对于父元素宽度的10%
    vw vh
      相对单位 视口区的宽度和高度 
      100vw 50vh
    em 和 rem 分别相对于父元素和根元素的字体大小。
  选择器：
    基础选择器 优先级 id>class>标签选择器
      id
        #id名
      class
        .class名
      标签选择器(元素选择器) 会选中所有同类标签
        table、div、p、span
    扩展选择器
      通配符  
       *{} 一般用来设置全局的默认样式
      组合    
        table,
        th,
        #id,
        .class
      关联
        table子元素中的th元素
        table th
        table .th
        /* 元素1 元素2  */
        /* 会选中元素1下面所有的元素2 */
        /* 会选中元素1的所有后代 */
        /* div span{
          color: red;
        } */
        /* 元素1 元素2  */
        /* 会选中元素1下面直接子代元素2 */
      伪类选择器
        :hover
        :focus 聚焦 表单元素
        :first-child 当前元素的第一个子元素
        :last-child  当前元素的最后一个子元素
      属性    
  css属性：
    color 文字颜色
    color: red;
    字体大小 
    现代浏览器中一般支持最小值为12px
    人类最适合 最小的字体大小 12px 再小看不清楚了
    对用户不友好
    font-size: 20px
  css的三种引入方式
      内联
      内部样式表
      外部样式表
    样式优先级：近的优先级最高
    使用优先级：外部、内部
    内联使用最少 一般测试时用
  常见的css属性
    尺寸
      width 设置元素的宽度
      height 设置元素高度
      以下的要结合%去使用
      max-height 设置元素的最大高度
      max-width 设置元素的最大宽度
      min-height 设置元素的最小高度
      min-width 设置元素的最小宽度
    字体属性
      font-size 字体大小 一般最小值12px
      font-style 字体风格
        normal正常、italic斜体、oblique倾斜
      font-weight 字体加粗
        normal正常、bold粗体、bolder更粗、lighter更细
      font-family 字体族科
        微软雅黑 Microsoft YaHei
      text-decoration 规定添加到文本的修饰  
        none 默认，没有线条
        underline 规定在文本下方显示线条
        overline 规定在文本上方显示线条
        line-through 规定显示横穿文本的线条 
    背景
      background-repeat
      background-position
    边框
      border:1px solid red;
      边框颜色
      边框样式
    鼠标光标
      cursor 
        auto
        pointer
        wait 
        move
  盒模型
    介绍
      CSS会把所有的Html元素都看成一个盒子，所有的样式也都是基于这个盒子。
    margin
      外边距
    border
      边框
    padding
      内边距
    content
      内容区
    默认盒子模型(内容盒子 content-box)
      默认状态下，盒子模型的width和height属性是指内容区的宽高
        所以要想得到盒子的真实大小
        实际宽度=
        width
        +paddingLeft
        +paddingRight
        +borderLeft
        +borderRight
        实际宽高度=
        borderTop+paddingTop+height+
        paddingBottom+borderBottom
    边框盒子模型 border-box
      width = 内容宽度+左右padding+左右border
      height = 内容高度+上下padding+上下border
    修改盒子模型的css属性
      box-sizing
  css计算
    注意这个计算过程中 运算符前后的空格一定要写
    calc(100vw - 20px);
    calc(100% - 20px);
  如何让块元素共享一行空间
    方式1：
      块元素改为行内块元素 
      display: inline-block;
    方式2：
      使用浮动布局
  css布局
    默认文档流
    浮动布局 float
    定位 position
    flex布局
# JavaScript(ES5,ES6)
  ## 介绍
    是一种跨平台、功能强大、应用广泛的面向对象脚本语言。
    是现代Web开发的核心技术之一
  ## 和Java的关系
    JavaScript和Java是完全不同的语言
    js最初是收到java启发设计的，有一定的相似性
    最初命名是LiveScript 为了营销考虑 改名为JavaScript
  ## js的组成
    ECMAScript 简称ES 是js的标准、核心
    DOM 文档对象模型
    BOM 浏览器对象模型
  js的引入
    具体的某个事件绑定上写
    内部脚本 在head标签中写script标签直接写js代码
    外部脚本 在head标签中写script标签引入外部js文件
      <script src="./js/index.js">
        内部js代码不生效
        alert("hello,world");
      </script>
  文件后缀名
    .js 
  注释
    // 单行注释
    /* 多行注释 */
  输出语句
    java: 终端输出system.out.println("");
    js:
      浏览器消息提示：alert("hello,world");
      控制台输出：   console.log("");
  变量：
    var   用于声明全局变量
          没有局部作用域 可以被重复声明
    let   用于声明变量 有局部作用域的概念
    const 用于声明常量
          声明时必须赋值，赋值后值不可以修改
    注意：
      js是弱类型语言 声明时不需要指定数据类型
      赋值时确定数据类型且数据类型可以更改
  变量命名格式：
    和java类似 
    字母、数字、下划线_或者美元符$
    数字不能开头
    驼峰命名
    常量名全大写用_做连字符
  数据类型：
    java
      基本类型
      引用类型
    js
      原始类型
        number(整数、小数、NaN)
        string(字符串 "" '')
        boolean(true,false)
        null(空)
        undefined(声明了但是没有初始化的变量)
        Symbol(代表独一无二的值 ES6新增)
      引用类型
        object
  如何判断数据类型
    typeof 运算符
  运算符
    算术运算符 + - * / 等
    赋值运算符 = += -= *= 等 
    比较运算符 > < >= <= != == ===
    逻辑运算符 && || !
    三目运算符 表达式?表达式成立的结果:表达式不成立的结果
    == 判断等号两边数据的值是否相同
    === 判断等号两边数据的类型是否相同，类型不同的话直接false，类型相同的话再比较值
  类型转换
    其他类型转换为数值类型
      parseInt() Number()
    其他类型转换为boolean类型
      0 NaN 转 boolean类型的结果是 false
      其他数字 结果都是 true
      undefined null 转 boolean类型的结果是 false
      string 空字符串转换结果为false
             非空字符串转换结果为true
  流程控制语句
    if else elseif 
    switch
    for
    while
  函数
    function 函数名 (参数1，参数2，...){
      函数体
    }
    不需要声明形参类型和返回值类型
    var myAdd = function(a,b){
      return a+b;
    }
  事件绑定
      <!-- 给按钮绑定事件 方式1 -->
      <input id="btn1" type="button" value="按钮1" onclick="clickBtn1()">
      <input id="btn2" type="button" value="按钮2" onclick="add(1,2)">
      方式2：在js代码中 获取元素后再绑定事件
  事件类型
    onclick()
  语法：
    js中字符串可以使用单引号 也可以使用双引号 但是不能混用
  js运行环境
    1. 浏览器
    2. NodeJS
      1. node index.js
      2. node 回车 进入到node命令行模式
  对象
    基本对象
      String Array JSON
    BOM 
      Window Location
    DOM
      js将html中每一个标签都封装成一个对象
  Array
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    声明
      var arr = new Array(1,2,3);
      var arr1 = [1,2,3];
    和java中的区别
      不需要指定数据类型
      同一个数组可以存放任意类型的值
      不需要指定数组长度 数组长度是可变的
### 方法
```Js
      push 
      splice
      slice
      toString
      pop
      join
      find
      ...
      forEach()
```
        参数是一个函数
        只会遍历有值的元素
        三种使用方式
          ！箭头函数
#### String 
    [String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
    创建
      var str = new String("hello");
      var str2 = "hello";
    属性
      length
    方法
      trim() 去除字符串首尾空格
      substring() 截取字符串
      startsWith()
      endsWith()
      indexOf()
      replace()
      slice()
      split()
      toLowerCase()
      toUpperCase()
  自定义对象
  JSON
  JavaScript对象标记法
  JavaScript Object Notation(JSON)
  语法:
  key值必须使用双引号（不是单引号）标记 Value可以任意
  {
    "key":10,
    "key1":"String",
    "key2":true,
    "key3":Value2
  }
  
学习网站 MDN 

 自定义对象
  JSON  
    JavaScript对象标记法
    JavaScript Object Notation 
    语法：  
      key值必须使用双引号（不是单引号）标记 value可以是任意的js数据类型
      {
        "key":30,
        "key1":"string",
        "key1":true,
        "likes":[1,2,3],
        "obj":{
          "name":"zs",
          "age":12
        },
        "key2":value2
      }
    使用场景
      前后台数据交互的时候
      序列化和反序列化 
      JSON.stringify();
      JSON.pares();
  BOM
    Browser Object Model   
      js将浏览器各个功能封装成对象，通过对象操作浏览器
    Window 浏览器窗口对象
      alert 
      confirm
      setInterval()
      setTimeout()
    Location  地址栏对象 
      获取地址栏信息
    Screen    屏幕对象
    History   历史记录对象
    Navigator 浏览器对象 
  DOM 
    https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model
    Document Object Model 文档对象模型
    js将html中每一个标签都封装成一个对象  
    Document 整个文档对象
    Element  元素对象 
    Attribute 属性对象
    Text 文本对象
      <div>123</div>
    Comment 注释对象
    DOM的主要作用
      更改元素内容
      更改元素样式
      给元素绑定事件
      给元素移除事件
      添加、删除元素
    主要方法
      getElementById() 
      getElementsByClassName() 
      getElementsByTagName() 
    元素的主要属性
      innerHTML
      innerText
      style 
      className
    元素的主要方法
      remove

12345565667765745643563

https://developer.mozilla.org/zh-CN/docs


# Vue

## 引入
#### 比如打扫屋子
- 直接使用html、css、js 像是自己亲手去打扫
- 如果使用 Vue框架 家政阿姨帮你去打扫 
## 软件
- Vscode NodeJS
## 介绍
- Vue 读音：view
- 是一套构建用户界面的渐进式框架
## 主流的前端框架
- Vue react Anguter
- 版本
  - Vue2
    - 23年12月31日停止维护
  - Vue3 
    - 2020年9月发布
## 学习方式
- 官网文档
  - https://cn.vuejs.org/
## 创建vu
1. 使用npm创建一个vue应用

    `npm create vue@latest`
2. 如果系统没有安装`create-vue@3.12.1`

    1. npm install create-vue@3.12.1 -g
    2. 软件名称：create-vue
    3. 命令：create-vue@3.12.1
    4. 参数：3.12.1
    5. 全局命令：-g
- 单页应用
```
My_Vue_app(項目名)/
├── /.vscode
│      └── 
├── /node_modules
│       └── 
├── /public ~> 静态资源文件
│       └── 
├── /.gitignore
│       └── 
├── /components ~> 存放自定义组键
│       └── 
├── /src - 主要代码文件目录(戰鬥目錄)
│       ├──/assets ~>静态文件目录
│       │
│       ├── /views ~> 视图文件夹 放大型页面组件 比如登录页 购物车页面等
│       │
│       ├── /components ~> 存放自定义组件的位置 小型组件 比如 按钮 下拉列表等
│       │
│       ├── /router ~> 定义
│       │
│       ├── main.js ~> 配置文件
│       │
│       └── App.vue ~>应用的主页组件 称为视图view
├── package-lock.json ~> 记录npm安装依赖的信息 如果出现bug 易于定位问题
│
├── package.json ~> 
│
├── /.gitignore ~> git忽略文件
│
├──vite.config.js ~> vite的配置文件
│
└── README.md-介绍当前项目
```



## 一、选择题
### 1. CSS 的全称是什么？<font color="blue" size =6>A</font>
A. Cascading Style Sheets
B. Color Style Sheets
C. Cascading Style System
D. Character Style Sheets
### 2. 在 CSS 中，哪个符号用于分隔属性和值？<font color="blue" size =6>A</font>
A. :
B. ;
C. ,
D. =
### 3. 下列哪个颜色表示方法表示透明色？<font color="blue" size =6>B</font>
A. #ffffff
B. rgba(0, 0, 0, 0)
C. #000000
D. rgb(255, 255, 255)
### 4. CSS 中，em 和 rem 的区别是什么？<font color="blue" size =6>A</font>
A. em 是相对于父元素，rem 是相对于根元素
B. em 是相对于根元素，rem 是相对于父元素
C. 两者都是相对于父元素
D. 两者都是相对于根元素
### 5. 在 JavaScript 中，const 关键字用于声明什么？ <font color='blue' size =6><b>B</b></font>
A. 变量
B. 常量
C. 函数
D. 类
## 二、填空题
### 1. CSS 文件的扩展名是 <font color="blue" size =6>.css</font>。
### 2. 在 CSS 中，通过  <font color="blue" size =6>padding</font> 可以设置元素的内边距。
### 3. JavaScript 的输出语句是  <font color="blue" size =6>console.log</font> 和 <font color="blue" size =6>alert</font> 。
### 4. 在 JavaScript 中，用于判断数据类型的运算符是 <font color="blue" size =6>typeof</font>。
### 5. 在 CSS 中，vw 和 vh 分别是相对于 <font color="blue" size =6>视窗宽度百分比</font> 和 <font color="blue" size =6>视窗高度百分比</font> 的单位。
## 三、简答题
### 1. 解释 CSS 盒模型的概念，并描述 content-box 和 border-box 的区别

**CSS盒模型** 描述了一个元素的布局特性，包括其内容区域、内边距（padding）、边框（border）和外边距（margin）。每个元素都可以看作是一个矩形盒子，由这四个部分构成：
- **内容区（Content Area）**：包含实际内容的区域，如文本或图片。
- **内边距（Padding）**：围绕内容区的空间，用于在内容区与边框之间创建空白。
- **边框（Border）**：围绕内边距和内容区的线，可以设置不同的颜色和样式。
- **外边距（Margin）**：围绕边框的外部空间，用于与其他元素之间的间隔。

**content-box** 和 **border-box** 是盒模型的两种不同计算方式：
- **content-box**：这是默认的盒模型。当你为元素设置宽度和高度时，这些值仅应用于内容区。内边距和边框将增加到设定的宽度和高度之外。
- **border-box**：在这种模式下，设置的宽度和高度包括了内容区、内边距和边框。这意味着内边距和边框不会增加元素的实际大小。

### 2. 列举并解释 JavaScript 中的三种原始数据类型

JavaScript 中的原始数据类型（Primitive Data Types）包括以下几种：
- **String**：用于表示文本数据，可以是一串字符，用单引号或双引号括起来。
- **Number**：用于表示数字，无论是整数还是浮点数。
- **Boolean**：用于表示逻辑值，只有两个值：`true` 和 `false`。

### 3. 在 CSS 中，如何使块元素共享一行空间？

块级元素默认情况下会独占一行，要让多个块级元素在同一行显示，可以通过以下几种方式实现：
- 使用 `display: inline-block;` 将块级元素转换为内联块级元素。
- 使用 Flexbox 或 Grid 布局，通过设置容器的 `display` 属性为 `flex` 或 `grid`。
- 使用 `float` 属性，虽然这种方法现在较少使用，因为它可能引起一些布局上的问题。

### 4. JavaScript的组成

JavaScript 主要由以下几个部分组成：
- **ECMAScript**：定义了语言的核心语法和功能，如变量、运算符、循环、函数等。
- **文档对象模型（DOM）**：提供了与网页内容交互的方法和接口。
- **浏览器对象模型（BOM）**：提供了与浏览器窗口交互的方法和接口。

### 5. JavaScript基本数据类型有哪些

JavaScript 的基本数据类型包括：
- **String**
- **Number**
- **Boolean**
- **null**
- **undefined**
- **Symbol**（ES6 引入）
- **BigInt**（ES11 引入）

### 6. == 与 === 的区别

- **==**：相等运算符，比较两个值是否相等，在比较之前会尝试进行类型转换。
- **===**：严格相等运算符，不仅比较值是否相等，还比较它们的类型是否相同。如果类型不同，则直接返回 `false`。

### 7. typeof 的返回值有哪些

`typeof` 操作符可以返回以下字符串之一：
- `"string"`
- `"number"`
- `"bigint"`
- `"boolean"`
- `"undefined"`
- `"symbol"`
- `"function"`（对于函数对象）
- `"object"`（对于对象、数组、null）



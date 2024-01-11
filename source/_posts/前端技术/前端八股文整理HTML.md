---
title: 前端八股文整理HTML&CSS
date: 2023/12/30
tags: [HTML, 八股文]
categories: 前端技术
recommend: true
locate: 南通
copyright: 整理
cover: /img/pageimage/0007.png
---

个人整理前端八股文和面试题，分模块梳理

包含转载内容

# iframe 优缺点

**优点**

- 可以将网页原封不动的加载进来
- 增加代码的可用性
- 用来加载显示较慢的内容，如广告、视频等

**缺点**

- 加载的内容无法被浏览器引擎识别，对`SEO`不友好
- 会阻塞`onload`事件加载
- 会产生很多页面，不利于管理

# Canvas 和 SVG

- **canvas 画布**，是通过`javascript`来绘制 2d 图，是逐像素进行渲染。
- **SVG 矢量图**，是基于`XML`描述的 2D 图形语言，每个元素都是可用的，可以为其添加事件。

# 盒模型：标准盒模型，怪异盒模型

[CSS 盒模型](https://blog.csdn.net/qq_37899792/article/details/90019385)

CSS 盒模型本质上是一个盒子，盒子包裹着 HTML 元素，盒子由四个属性组成，从内到外分别是：**content 内容**、**padding 内填充**、**border 边框**、**外边距 margin**

![标准盒模型.png](https://i.postimg.cc/g2NCk8nf/image.jpg)

![怪异盒模型.png](https://i.postimg.cc/sDzqYwWk/image.jpg)

两种盒模型的区别在于容器宽度和高度的计算方式不同：

```标准盒模型
width = content-width
height = content-height
```

```怪异盒模型
width = content-width + padding-width + border-width
height = content-height + padding-height + border-height
```

想要切换盒模型，可以通过借用 css3 的 box-sizing 属性

```标准盒模型
box-sizing: content-box // 标准盒模型
box-sizing: border-box // 怪异盒模型
```

# 块元素与行内元素

## 块元素

块元素拥有自己的宽高，也就是可以自定义 width 和 height，它可以独占一行高度，一般可以作为其他元素容器，可容纳块元素及行内元素

块元素特点:.

1. 独占一行
2. 宽高，外边距，内边距都可以控制，元素有`<div>`，`<hn>`，`<p>`，`<form>`，`<hr>`等等

## 行内元素

行内元素不可以设置宽高，但可以与其他行内元素位于同一行，行内元素高度一般由字体大小，宽度由内容长度控制决定

行内元素特点:

1. 不独占一行
2. 宽高无效，`<padding>`和`<margin>`只能左右有效，上下无效，元素有`<a>`，`<span>`,`<br>`,`<label>`等

通过设置 dispaly 可以更改

## 定义

```块元素与行内元素定义
display: block // 定义为块元素
display: inline // 定义为行内元素
display: inline-block // 定义为行内块元素
```

# 语义化标签

[什么是 HTML 语义标签？](https://blog.csdn.net/eeeecw/article/details/80591511)

## 什么是 HTML 语义化标签

语义化标签旨在让标签具有自己的含义

```案例
<p>一行文字</p>
<span>一行文字</span>
```

如上案例所展示，`<p>`标签与`<span>`标签区别之一就在于`<p>`标签的含义是：段落，而`<span>`没有独特的含义。

## 语义化标签的优势

1. 代码结构清晰，方便阅读，有利于团队合作开发
2. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以语义的方式来渲染网页
3. 有利于搜索引擎优化（SEO）

## 常见语义化标签

- `<title>` : 标题
- `<hn>` : h1~h6，分级标题，`<hn>`和`<title>`的协调有利于搜索引擎优化
- `<ul>` : 无序列表
- `<li>` : 有序列表
- `<header>` : 页眉，通常包括网站标志、主导航、全站链接以及搜索框
- `<nav>`：标记导航，仅对文档中重要的链接群使用。
- `<main>`：页面主要内容，一个页面只能使用一次。如果是 web 应用，则包围其主要功能
- `<small>`：呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权。
- `<strong>`：和 `em` 标签一样，用于强调文本，但它强调的程度更强一些。
- `<em>`：将其中的文本表示为强调的内容，表现为斜体。

# 伪类和伪元素

[CSS 伪类和伪元素的区别](https://juejin.cn/post/7198386916760141883)

**伪类**是添加到选择器的关键字，用于**指定所选元素的特殊状态**，修改特殊状态下的样式

比如设置鼠标悬浮在按钮元素上时，设置背景色为红底白字

```css
button:hover {
  background: red;
  color: white;
}
```

**伪元素**是一个附加至选择器末的关键词，允许你**对被选择元素的特定部分**修改样式

常见的伪元素有：

- `::before/:before`在选择器前添加 content 指定的内容，并且设定样式
- `::after/:after`在选择器后添加 content 指定的内容，并且设定样式
- `::first-letter/:first-letter`修改选择器内容第一个文字的样式
- `::first-line/:first-line`修改选择器内容第行文字的样式
- `::marker`选中一个 list item 的 marker box，后者通常含有一个项目符号或者数字。它作用在任何设置了[display: list-item](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fdisplay "https://developer.mozilla.org/zh-CN/docs/Web/CSS/display")的元素或伪元素上
- `::selection`修改鼠标选中项的样式
- `::placeholder`修改输入框占位符的样式

## 伪类和伪元素的区别

**语法区别**

css2 中伪元素和伪类的写法是一致的，都是使用单冒号+名称来表示，**在 css3 规范中为了清晰的加以区分，推荐使用双冒号标识伪元素**

**含义区别**

**伪类**是设置指定元素在**特定状态**下的样式。

**伪元素**是设置指定元素**特定部分**的内容和样式。

# 选择器

[CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)

## 直接选择器

[通用选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors)

选择所有元素。（可选）可以将其限制为特定的名称空间或所有名称空间

**语法：** `*`,`ns|*`,`*|*`

**例子：** `*` 将匹配文档的所有元素。

[元素选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors)

按照给定的节点名称，选择所有匹配的元素。

**语法：** `elementname`

**例子：** `input` 匹配任何 [`<input>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input) 元素。

[类选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Class_selectors)

按照给定的 `class` 属性的值，选择所有匹配的元素。

**语法：** `.classname`

**例子：** `.index` 匹配任何 `class` 属性中含有 "index" 类的元素。

[ID 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/ID_selectors)

按照 `id` 属性选择一个与之匹配的元素。需要注意的是，一个文档中，每个 ID 属性都应当是唯一的。

**语法：** `#idname`

**例子：** `#toc` 匹配 ID 为 "toc" 的元素。

[属性选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)

按照给定的属性，选择所有匹配的元素。

**语法：** `[attr]`,`[attr=value]`,`[attr~=value]`,`[attr|=value]`,`[attr^=value]`,`[attr$=value]`,`[attr*=value]`

**例子：** `[autoplay]` 选择所有具有 `autoplay` 属性的元素（不论这个属性的值是什么）。

## 伪选择器

[伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

`:` 伪选择器支持按照未被包含在文档树中的状态信息来选择元素。

**例子：** `a:visited` 匹配所有曾被访问过的 [`<a>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a) 元素。

[伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)

`::` 伪选择器用于表示无法用 HTML 语义表达的实体。

**例子：** `p::first-line` 匹配所有 [`<p>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p) 元素的第一行。

# CSS 优先级

![CSS优先级.png](https://i.postimg.cc/V6MZMCks/CSS.png)

层叠优先级是:

**浏览器缺省 < 外部样式表 < 内部样式表 < 内联样式**

其中样式表又有:

**类选择器 < 类派生选择器 < ID 选择器 < ID 派生选择器**

# px, em, rem 的区别

- `px` 固定像素单位，不能随其它元素的变化而变化
- `em`是相对于父元素的单位，会随着父元素变化而变化
- `rem`是相对于根元素`html`，它会随着`html`元素变化而变化

# BFC 和 IFC 的理解

[前端人员不要只知道 KFC，你应该了解 BFC、IFC、GFC 和 FFC](https://juejin.cn/post/7072174649735381029)

## BFC

Block Fomatting Context，块级格式上下文，是一个独立的渲染区域，区域与外部毫不相干

**如何触发**：浮动，绝对定位元素，行内块，表格单元格，表格标题，溢出元素，弹性盒子

**布局规则**：

- 内部的 Box 会在垂直方向，一个接一个地放置。
- Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
- 每个元素的 margin box 的左边， 与包含块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
- BFC 的区域不会与 float box 重叠。
- BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 计算 BFC 的高度时，浮动元素也参与计算

**应用场景**：

- 解决块级元素垂直方向 margin 重叠
- 解决高度坍塌问题
- 清楚浮动

## IFC

Inline Formatting Context， 行级格式化上下文

**如何触发**：块级元素中只包含内联级别元素

**布局规则**：

- 在一个 IFC 内，子元素是水平方向横向排列的，并且垂直方向起点为元素顶部。
- 子元素只会计算横向样式空间，【padding、border、margin】，垂直方向样式空间不会被计算，【padding、border、margin】。
- 在垂直方向上，子元素会以不同形式来对齐（vertical-align）
- 能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框（line box）。行框的宽度是由包含块（containing box）和与其中的浮动来决定。
- IFC 中的`line box`一般左右边贴紧其包含块，但 float 元素会优先排列。
- IFC 中的`line box`高度由 CSS 行高计算规则来确定，同个`IFC`下的多个`line box`高度可能会不同。
- 当 `inline boxes`的总宽度少于包含它们的`line box`时，其水平渲染规则由 `text-align` 属性值来决定。
- 当一个`inline box`超过父元素的宽度时，它会被分割成多个`boxes`，这些`boxes`分布在多个`line box`中。如果子元素未设置强制换行的情况下，`inline box`将不可被分割，将会溢出父元素。

**应用场景**：

- 元素水平居中
- 多行文本水平垂直居中

# 参考链接

[前端面试八股文](https://www.yuque.com/baiyueguang-rfnbu/tr4d0i/rz15kr)

[前端铜九铁十面试必备八股文——HTML&CSS](https://juejin.cn/post/7269794410573512758)

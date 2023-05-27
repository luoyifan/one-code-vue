# 介绍

## 为什么是 one-code-vue
one-code-vue 是一个前后端一体的开发平台，他能够以拖拉拽的方式完成功能开发，还集成了数据库设计、菜单管理、打印、报表、字典、数据窗口等功能，让整个开发交付过程变得更简单、快捷

## Markdown 编写示例
<!--这是 vue 代码-->
<ClientOnly>
<div>
    <yv-vjson-button :vjson="{text:'这是通过OneCodeVue加载出来的按钮'}" />
</div>
</ClientOnly>

### Vue代码块
```vue
<!--这是 vue 代码-->
<div>
    <button>按钮</button>
    <el-button>按钮2</el-button>
</div>
```

### 警告
::: danger STOP
危险区域，禁止通行
:::

### JS代码块
```js
// 这是 js 代码
console.log('你好，VuePress！')
```

### 点击展开
::: details 点击展开
```js
console.log('你好，VuePress！')
```

这里是关于代码的说明, 下面遇到三个冒号之后，展开收起的内容结束
:::


### 提示
::: tip 这是提示
提示1
提示2
提示3
提示4
提示5
:::

123

### 可调试代码块
::: demo
button/base
:::

::: demo
button/disabled
:::
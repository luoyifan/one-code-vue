# 组件
::: v-pre
<ClientOnly>
    <OtherComponent msg="abc"></OtherComponent>
    <button>按钮</button>
</ClientOnly>
:::
### 为什么是 yvan-vue

yvan-vue 是一个前后端一体的开发平台，他能够以拖拉拽的方式完成功能开发，还集成了数据库设计、菜单管理、打印、报表、字典、数据窗口等功能，让整个开发交付过程变得更简单、快捷

### 最简单的示例

```vue
<div>
    <button>按钮</button>
    <el-button>按钮2</el-button>
</div>
```

::: danger STOP
危险区域，禁止通行
:::

```js
console.log('你好，VuePress！')
```

::: details 点击查看代码

```js
console.log('你好，VuePress！')
```

:::

::: v-pre
`{{ This will be displayed as-is }}`
:::
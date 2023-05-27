# ezgrid
使用的 `element-ui` 的 `el-table` 组件，对其进行了封装，使其更加易用。

## 高级表格组件
xtype: ezgrid

对应Vue组件: yv-vjson-ezgrid

## API
### 双向绑定数据
| 属性名         | 说明        | 类型     | 默认值       |
|-------------|-----------|--------|-----------|
| selection   | 当前选中行的数据  | Object | undefined | Object |
| checkedRows | 当前勾选中的数据行 | Array | Object[]  |

### 方法
| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| getSelectedRows | 获取选中的行 | 无 |

### 事件
| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| selection-change | 当前选中行发生变化时触发 | selection: 当前选中行的数据 |

## 使用案例
### 基本使用
<yv-vjson-div :vjson="{ text: 'abcdefgh'}" />

### demo
<ClientOnly>
    <yv-vjson-aggrid :vjson="{}" />
</ClientOnly>
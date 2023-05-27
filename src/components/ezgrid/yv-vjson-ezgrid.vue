<template>
  <ve-table :columns="columns" :table-data="tableData"/>
</template>
<script>
import _ from 'lodash'
import VueEasytable, { VeLocale, VeContextmenu } from "./packages/index"
import enUS from "./packages/src/locale/lang/en-US.js"
// import "vue-easytable/libs/theme-default/index.css"

export default {
  install(Vue) {
    Vue.use(VueEasytable)
    Vue.use(VeContextmenu)
    VeLocale.use(enUS)
  },
  data() {
    return {
      columns: [
        {field: "name", title: "Name", align: "center"},
        {field: "date", title: "Date", align: "left"},
        {field: "hobby", title: "Hobby", align: "right",},
        {field: "address", title: "Address"},
      ],
      tableData: [
        {
          name: "John",
          date: "1900-05-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Shanghai",
        },
        {
          name: "Dickerson",
          date: "1910-06-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Beijing",
        },
        {
          name: "Larsen",
          date: "2000-07-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Chongqing",
        },
        {
          name: "Geneva",
          date: "2010-08-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Xiamen",
        },
        {
          name: "Jami",
          date: "2020-09-20",
          hobby: "coding and coding repeat",
          address: "No.1 Century Avenue, Shenzhen",
        },
      ],
    };
  },
};
</script>
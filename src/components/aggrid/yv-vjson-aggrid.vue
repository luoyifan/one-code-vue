<template>
  <ag-grid-vue
      style="width: 500px; height: 200px"
      :class="['ag-theme-alpine', 'yv-aggrid']"
      :columnDefs="columnDefs"
      :rowData="rowData"
  />
</template>
<script>
import _ from 'lodash'
import {AgGridVue} from "ag-grid-vue3"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"

export default {
  components: {
    AgGridVue: AgGridVue
  },
  data() {
    return {
      columnDefs: [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"},
      ],
      rowData: [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000},
      ],
    };
  },
};
</script>
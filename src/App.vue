<template>
  <router-view/>
</template>

<script lang="ts">
import * as echarts from 'echarts'
import { provide, defineComponent } from 'vue'


export default defineComponent({
  setup() {
    provide('ec',echarts)
  },
})
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

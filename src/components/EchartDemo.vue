<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="myChart" :style="{width: '100wv', height: '500px'}"></div>
  </div>
</template>

<script lang="ts">
import * as echarts from 'echarts'
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class EchartDemo extends Vue {
  mounted (): void {
    let _doc: HTMLElement = document.getElementById("myChart") as HTMLElement;
    let myChart = echarts.init(_doc);
    // 绘制图表
    myChart.setOption({
      title: { text: "总用户量" },
      tooltip: {},
      xAxis: {
        data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
      },
      yAxis: {},
      series: [
        {
          name: "用户量",
          type: "line",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
    window.onresize = function () {//自适应大小
      myChart.resize();
    };
  }
  // public name() {
    
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

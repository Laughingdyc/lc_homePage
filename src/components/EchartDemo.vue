<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="myChart" :style="{width: '100wv', height: '500px'}"></div>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
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
    const dateData = this.formatDate()
    const viewData = this.formatViews()
    // 绘制图表
    myChart.setOption({
      title: { text: "总用户量" },
      tooltip: {},
      xAxis: {
        data: dateData,
      },
      yAxis: {},
      series: [
        {
          name: "用户量",
          type: "line",
          data: viewData,
        },
      ],
    });
    window.onresize = function () {//自适应大小
      myChart.resize();
    };
  }
  public formatDate():string[] {
    const resultDate = []
    const currentDate = new Date().getTime()
    for (let beforeDays = 0; beforeDays < 30; beforeDays++) {
      const beforeDateTimeStamp = currentDate - ( 1000 * 60 * 60 * 24 ) * beforeDays
      resultDate.push(
        dayjs(beforeDateTimeStamp).format('YYYY-MM-DD')
      )
    }
    return resultDate.reverse();
  }
  public formatViews():number[] {
    const resultViews = []
    for (let beforeDays = 0; beforeDays < 30; beforeDays++) {
      resultViews.push(
        Math.round(Math.random()*30+20)
      )
    }
    return resultViews.reverse();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

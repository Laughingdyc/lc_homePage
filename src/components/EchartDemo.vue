<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="myChart" :style="{width: '100wv', height: '500px'}"></div>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import * as echarts from 'echarts'
import { getHomePageViews } from '@/api/echart_demo'
import { defineComponent, onMounted } from 'vue'
export default defineComponent ({
  props: {
    msg: {
      require: true,
      type: String
    },
  },
  setup () {
    onMounted(() => {
      const dateData = formatDate(30)
      const viewData: number[] = []
      getHomePageViews({
        startDate: dateData[0],
        endDate: dateData[dateData.length - 1]
      }).then((response) => {
        if (response.status === 200 && response.data) {
          response.data.data.map((x:any) => {
            viewData.push(x.views)
          })
          let _doc: HTMLElement = document.getElementById("myChart") as HTMLElement;
          let myChart = echarts.init(_doc);
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
      })
    })
    const formatDate = (days: number) => {
      const resultDate = []
      const currentDate = new Date().getTime()
      for (let beforeDays = 0; beforeDays < days; beforeDays++) {
        const beforeDateTimeStamp = currentDate - ( 1000 * 60 * 60 * 24 ) * beforeDays
        resultDate.push(
          dayjs(beforeDateTimeStamp).format('YYYY-MM-DD')
        )
      }
      return resultDate.reverse();
    }
    
    return {
      formatDate
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

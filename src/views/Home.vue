<template>
  <div class="home">
    <EchartDemo msg="Welcome to LightCommunity!" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import EchartDemo from '@/components/EchartDemo.vue'; // @ is an alias to /src

@Options({
  components: {
    EchartDemo
  },
})
export default class Home extends Vue {}
</script>

<template>
  <div class="hello">
    <img alt="Vue logo" src="./assets/logo.png" />

    <h1>是不是闰年呢？</h1>
    <hr />
    <van-field v-model="year" label="年 份" placeholder="请输入年份" label-width="50px" />
    <h2>{{ res }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      year: '2000',
    };
  },
  computed: {
    res() {
      const y = Number(this.year);
      console.log(y);

      if (Number.isNaN(y) || y < 0) {
        return '你输入的是啥？？？年份吗？';
      } else {
        if ((y % 4 === 0 && y % 100 !== 0) || (y % 100 === 0 && y % 400 === 0)) {
          return '是闰年';
        } else {
          return '不是闰年';
        }
      }
    },
  },
});
</script>

<style scoped>
#app {
}
</style>

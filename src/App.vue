<!--
 * @Description:
 * @Version: 2.0
 * @Autor: jingbin
 * @Date: 2021-01-27 09:22:06
 * @LastEditors: jingbin
 * @LastEditTime: 2021-01-27 17:41:14
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <user-info></user-info>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import userInfo from './components/userInfo.vue';

@Component({
  components: {
    HelloWorld,
    userInfo,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

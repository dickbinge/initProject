<!--
 * @Description:
 * @Version: 2.0
 * @Autor: jingbin
 * @Date: 2021-01-27 09:22:06
 * @LastEditors: jingbin
 * @LastEditTime: 2021-01-28 17:05:46
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <span ref="ts01"></span>
    <button @click="addToCount">点击一下</button>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Provide, Vue, Emit, PropSync, Ref, Watch,
} from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  // prop
  @Prop() private msg!: string;

  @Prop() private name!: string;

  @PropSync('age', { type: Number }) syncedAge!: number; // 这里边有个 this.$emit('update:age');,如果当前页面上 syncedAge 更新则会同步更新age

  // data
  @Provide() obj: Record<string, any> = {}; // Record<K, T> 存在以专门定义类型的键，意味着尝试访问对象属性

  @Provide() retObj: Record<string, any> = {};

  @Provide() list: Array<string> = [];

  @Provide() times = 0;

  // 定义ref
  @Ref() readonly ts01 !: HTMLElement;

  // computed
  get computedMsg() {
    return this.msg.split(' ').reverse().join(' ');
  }

  // watch 的用法
  @Watch('obj', { immediate: true, deep: true })
  handlerChangeObj(val: Record<string, any>, oldVal: Record<string, any>) {
    console.log(val, oldVal);
    this.retObj = { ...val, ...oldVal };
  }

  // methods
  addTimes(a: number): void {
    console.log(this.obj);
    this.times += a;
  }

  testTimes(a: number): object {
    this.obj = {
      id: '001',
      age: a,
    };
    return this.obj;
  }

  /**
   *  emit 使用
   */
  @Emit('addCount')
  addToCount() {
    this.times += 1;
    this.ts01.innerHTML = '001';
  }

  mounted() {
    this.times = 0;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

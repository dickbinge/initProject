<!--
 * @Description:
 * @Version: 2.0
 * @Autor: jingbin
 * @Date: 2021-01-27 17:36:51
 * @LastEditors: jingbin
 * @LastEditTime: 2021-01-28 17:09:48
-->
<template>
  <div class="user-info">
    <span class="first-name">姓：{{firstName}}</span>
    <span class="last-name">名：{{lastName}}</span>
    <button @click="handlerName">点击生成名称</button>
    <p>我的名称{{fullName}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import {
  namespace,
} from 'vuex-class';

const userModel = namespace('user');
@Component
export default class userInfo extends Vue {
  @userModel.Action('fetchData') public fetchData!: Function;

  @userModel.Mutation('changeMobile') public changeMobile!: Function;

  @userModel.Getter('fullName') public fullName!: string;

  @userModel.State('firstName') public firstName!: string;

  @userModel.State('mobile') public mobile !: string;

  @Provide() userName = '';

  public created() {
    this.fetchData();
    this.changeMobile('18392169682');
  }

  handlerName(): void {
    this.userName = this.fullName;
  }
}
</script>

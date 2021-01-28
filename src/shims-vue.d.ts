/*
 * @Description:
 * @Version: 2.0
 * @Autor: jingbin
 * @Date: 2021-01-27 09:22:06
 * @LastEditors: jingbin
 * @LastEditTime: 2021-01-27 11:14:16
 */
// 由于TypeScript 默认不支持'*.vue'后缀的文件，所以在vue项目中引入的时候创建该文件，即意味着遇到'.vue'后缀交给vue模板来使用。
declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

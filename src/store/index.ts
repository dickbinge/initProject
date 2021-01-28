/*
 * @Description:
 * @Version: 2.0
 * @Autor: jingbin
 * @Date: 2021-01-27 09:22:06
 * @LastEditors: jingbin
 * @LastEditTime: 2021-01-27 15:31:51
 */
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { user } from './user/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    user,
  },
};

export default new Vuex.Store<RootState>(store);

/*
 * @Description:
 * @Version: 2.0
 * @Autor: jingbin
 * @Date: 2021-01-27 14:30:24
 * @LastEditors: jingbin
 * @LastEditTime: 2021-01-27 17:30:25
 */
import { MutationTree } from 'vuex';
import { UserState } from './types';

export const mutations: MutationTree<UserState> = {
  changeMobile(state, mobile: string) {
    state.mobile = mobile;
  },
  saveUserInfo(state, userInfo) {
    state = Object.assign(state, userInfo);
  },
};

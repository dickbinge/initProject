/*
 * @Description:
 * @Version: 2.0
 * @Autor: jingbin
 * @Date: 2021-01-27 14:29:58
 * @LastEditors: jingbin
 * @LastEditTime: 2021-01-27 16:38:00
 */
import { ActionTree } from 'vuex';
import { UserState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<UserState, RootState> = {
  fetchData({ commit }): void {
    const userInfo: UserState = {
      firstName: 'Hello',
      lastName: 'World',
      mobile: '12335000',
    };
    commit('saveUserInfo', userInfo);
  },
};

/*
 * @Description:
 * @Version: 2.0
 * @Autor: jingbin
 * @Date: 2021-01-27 14:30:10
 * @LastEditors: jingbin
 * @LastEditTime: 2021-01-27 16:39:57
 */
import { GetterTree } from 'vuex';
import { UserState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<UserState, RootState> = {
  fullName(state): string {
    return `${state.firstName} ${state.lastName}`;
  },
};

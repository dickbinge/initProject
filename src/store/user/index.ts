/*
 * @Description:
 * @Version: 2.0
 * @Autor: jingbin
 * @Date: 2021-01-27 14:30:15
 * @LastEditors: jingbin
 * @LastEditTime: 2021-01-27 17:30:44
 */
import { Module } from 'vuex';
import { UserState } from './types';
import { RootState } from '../types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const state: UserState = {
  firstName: '',
  lastName: '',
  mobile: '',
};
const namespaced = true;
export const user: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
export default state;

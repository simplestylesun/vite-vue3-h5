/*
 * @Date: 2022-09-15 11:01:52
 * @LastEditors: wkl
 * @LastEditTime: 2022-09-15 13:36:07
 * @FilePath: /vite-vue3-h5/src/router/modules/main.ts
 */
import { RouteRecordRaw } from 'vue-router';

export const main: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      icon: 'home-o',
    },
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/category/index.vue'),
    meta: {
      title: '分类',
      icon: 'apps-o',
    },
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/demo/index.vue'),
    meta: {
      title: 'demo',
      icon: 'apps-o',
    },
  },
];

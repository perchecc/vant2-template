import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layouts'
import FieldLayout from '@/layouts/FieldLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'field',
    component: Layout,
    children: [
      {
        path: 'field',
        redirect: './field/fieldList',
        component: FieldLayout,
        meta: {
          title: '田块',
        },
        children: [
          {
            path: 'fieldList',
            name: 'FieldList',
            component: () => import('@/views/field/fieldList.vue'),
            meta: {
              title: '田块列表',
            },
          },
        ],
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router

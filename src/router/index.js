import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import productList from '@/views/product.vue'
import productDetail from '@/views/productDetail.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'productList',
      component: productList,
    },
    {
      path: '/detail',
      name: 'productDetail',
      component: productDetail,
    }
  ]
})

import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/board",
      name: "board",
      component: () =>
        import(/* webpackChunkName: "index" */ "@/views/board/Index.vue"),
      children: [
        {
          path: "list/:contentId",
          name: "list",
          component: () =>
            import(/* webpackChunkName: "list" */ "@/views/board/List.vue")
        },
        {
          path: "form",
          name: "form",
          component: () =>
            import(/* webpackChunkName: "form" */ "@/views/board/Form.vue")
        },
        {
          path: "detail/:seq",
          name: "detail",
          component: () =>
            import(/* webpackChunkName: "detail" */ "@/views/board/Detail.vue")
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

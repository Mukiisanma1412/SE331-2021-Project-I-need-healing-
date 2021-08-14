import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PeopleLayout from "../views/PeopleLayout.vue"
import PeopleDetail from "../views/peopleAndDetail/PeopleDetail.vue";
import DoctorComment from "../views/peopleAndDetail/DoctorComment.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: (route) => ({page: parseInt(route.query.page) || 1 })
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/people/:id',
    name: 'PeopleLayout',
    props: true,
    component: PeopleLayout,
    children: [
      {
        path: '',
        name: 'PeopleDetail',
        component: PeopleDetail
      },
      {
        path: 'comment',
        name: 'DoctorComment',
        component: DoctorComment
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../components/layout'
import Home from '../components/index'
import Login from '../components/auth/login'
import Register from '../components/auth/register'

//Survey
import listSurvey from '../components/survey/index'
import createSurvey from '../components/survey/create'
import analysisSurvey from '../components/survey/analysis'
import viewSurvey from '../components/survey/view'
import doSurvey from '../components/survey/doSurvey'

//about
import About from '../components/about/index'

// error
import ErrorPage from '../components/error/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children : [
          {
          path: '',
          name: 'home',
          component: Home,
          },
          {
            path: 'survey/create',
            name: 'createSurvey',
            component: createSurvey,
          },
          {
            path: 'survey/analysis',
            name: 'analysisSurvey',
            component: analysisSurvey,
          },
          {
            path: 'survey/view',
            name: 'viewSurvey',
            component: viewSurvey,
          },
          {
            path: 'survey/do/',
            name: 'doSurvey',
            component: doSurvey,
          },
          {
            path: 'survey/list/',
            name: 'listSurvey',
            component: listSurvey,
          },
          {
            path: 'about',
            name: 'about',
            component: About,
          }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      name: 'error',
      component: ErrorPage
    }
  ]
})

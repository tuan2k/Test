import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../components/layout'
import Home from '../components/index'
import Login from '../components/auth/login'
import Register from '../components/auth/register'

//Survey
import listSurvey from '../components/survey/index'
import createSurvey from '../components/survey/create'
import editSurvey from '../components/survey/edit'
import viewSurvey from '../components/survey/view'
import doSurvey from '../components/survey/doSurvey'

//history
import History from '../components/history/index'

//blog
import myNFT from '../components/myNFT/index'

//about
import About from '../components/about/index'

// galarry
import Gallary from '../components/gallarry/index'

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
            name: 'editSurvey',
            component: editSurvey,
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
            path: 'history',
            name: 'history',
            component: History,
          },
          {
            path: 'about',
            name: 'about',
            component: About,
          },
          {
            path: 'myNFT',
            name: 'myNFT',
            component: myNFT,
          },
          {
            path: 'gallary',
            name: 'gallary',
            component: Gallary,
          },
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

import { createRouter, createWebHistory } from 'vue-router'
import {
  DashboardView,
  ProfileView,
  ProjectView,
  ExperienceView,
  ContentView,
  NetworkView,
  MessageView,
  SettingView,
  SkillView,
  AdminView,
  LoginView,
} from '../views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'admin',
      component: AdminView,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: DashboardView
        },
        {
          path: '/profile',
          name: 'profiles',
          component: ProfileView,
        },
        {
          path: '/projects',
          name: 'projects',
          component: ProjectView,
        },
        {
          path: '/experiences',
          name: 'experiences',
          component: ExperienceView,
        },
        {
          path: '/contents',
          name: 'contents',
          component: ContentView,
        },
        {
          path: '/networks',
          name: 'networks',
          component: NetworkView,
        },
        {
          path: '/skills',
          name: 'skills',
          component: SkillView,
        },
        {
          path: '/messages',
          name: 'messages',
          component: MessageView,
        },
        {
          path: '/settings',
          name: 'settings',
          component: SettingView,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    }
  ]
})

export default router

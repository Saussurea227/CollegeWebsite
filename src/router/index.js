import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/components/pages/FirstPage'

const AdminPage = () => import('@/components/pages/admin/AdminPage')
const Announcement = () => import('@/components/pages/admin/assay_manage/annocement/Announcement')

const CollegeNews = () => import('@/components/pages/admin/assay_manage/college_news/CollegeNews')
const PresenceOfStudent = () => import('@/components/pages/admin/assay_manage/presence_of_student/PresenceOfStudent')
const EditAssay = () => import('@/components/pages/admin/assay_manage/common/EditAssay')
const AddAssay = () => import('@/components/pages/admin/assay_manage/common/AddAssay')
const AducationOfTeaching = () => import('@/components/pages/admin/assay_manage/aducation_of_teaching/AducationOfTeaching')
const CollectStudent = () => import('@/components/pages/admin/assay_manage/collect_student/CollectStudent')

const SlideShow = () => import('@/components/pages/homepage/common/SlideShow')
const SlideShowadmin0 = () => import('@/components/pages/admin/slideshow_manage/SlideShow.vue')
const MainContent = () => import('@/components/pages/homepage/common/MainContent')
const AcademyState = () => import('@/components/pages/homepage/academystate/AcademyState')
const Home = () => import('@/components/pages/homepage/Home/home')

const Logging = () => import('@/components/pages/login/Logging')


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: true,
        title: 'HelloWorld'
      }
    },
    //首页
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage,
      meta: {
        keepAlive: true
      }
    },

    {
      path: '/Logout',
      redirect: '/FirstPage'
    },
    {
      path: '/AdminPage',
      name: 'AdminPage',
      component: AdminPage,
      meta: {
        keepAlive: true,
        title: '管理员端'
      },
      children: [
        {
          path: '',
          redirect: '/CollegeNews/:messagetype'
        },
        {
          path: '/Announcement/:messagetype',
          name: 'Announcement',
          component: Announcement,
          meta: {
            keepAlive: false,
            title: '通知公告'
          }
        },
        {
          path: '/CollegeNews/:messagetype',
          name: 'CollegeNews',
          component: CollegeNews,
          meta: {
            keepAlive: false,
            title: '学院新闻'
          }

        },
        {
          path: '/PresenceOfStudent/:messagetype',
          name: 'PresenceOfStudent',
          component: PresenceOfStudent,
          meta: {
            keepAlive: false,
            title: '学子风采'
          }
        },
        {
          path: '/EditAssay/:id',
          name: 'EditAssay',
          component: EditAssay,
          meta: {
            keepAlive: false,
            title: '管理员端-编辑文章'
          }
        },
        {
          path: '/AddAssay/:messagetype',
          name: 'AddAssay',
          component: AddAssay,
          meta: {
            keepAlive: false,
            title: '管理员端-添加文章'
          }

        },
        {
          path: '/AducationOfTeaching/:messagetype',
          name: 'AducationOfTeaching',
          component: AducationOfTeaching,
          meta: {
            keepAlive: false,
            title: '教育教学'
          }

        },
        {
          path: '/CollectStudent/:messagetype',
          name: 'CollectStudent',
          component: CollectStudent,
          meta: {
            keepAlive: false,
            title: '招生就业'
          }

        },
        {
          path: '/SlideShowadmin0',
          name: 'SlideShowadmin0',
          component: SlideShowadmin0,
          meta: {
            keepAlive: true
          }
        },

      ]
    },
    {
      path: '/SlideShow',
      name: 'SlideShow',
      component: SlideShow,
      meta: {
        keepAlive: true
      }
    },


    {
      path: '/AcademyState',
      name: 'AcademyState',
      component: AcademyState,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/MainContent/:messageid',
      name: 'MainContent',
      component: MainContent,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true,
        title: '主页'
      }
    }, {
      path: '/Logging',
      name: 'Logging',
      component: Logging,
      meta: {
        keepAlive: true
      }
    }


  ],
  mode: 'history',
  // linkActiveClass: 'active'

})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title,
    next()
})
export default router
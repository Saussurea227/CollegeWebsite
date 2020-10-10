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
const CheckList = () =>import('../components/pages/superadmin/CheckList')
const AdminList = () =>import('../components/pages/superadmin/AdminList')
const SuperAdminPage = () =>import('../components/pages/superadmin/SuperAdminPage')
const Register = () =>import('../components/pages/register/Register')


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
            redirect: '/AdminPage/CollegeNews/:messagetype'
          },
          {
            path: '/AdminPage/Announcement/:messagetype',
            name: 'Announcement',
            component: Announcement,
            meta: {
              keepAlive: false,
              title: '通知公告'
            }
          },
          {
            path: '/AdminPage/CollegeNews/:messagetype',
            name: 'CollegeNews',
            component: CollegeNews,
            meta: {
              keepAlive: false,
              title: '学院新闻'
            }

          },
          {
            path: '/AdminPage/PresenceOfStudent/:messagetype',
            name: 'PresenceOfStudent',
            component: PresenceOfStudent,
            meta: {
              keepAlive: false,
              title: '学子风采'
            }
          },
          {
            path: '/AdminPage/EditAssay/:id',
            name: 'EditAssay',
            component: EditAssay,
            meta: {
              keepAlive: false,
              title: '管理员端-编辑文章'
            }
          },
          {
            path: '/AdminPage/AddAssay/:messagetype',
            name: 'AddAssay',
            component: AddAssay,
            meta: {
              keepAlive: false,
              title: '管理员端-添加文章'
            }

          },
          {
            path: '/AdminPage/AducationOfTeaching/:messagetype',
            name: 'AducationOfTeaching',
            component: AducationOfTeaching,
            meta: {
              keepAlive: false,
              title: '教育教学'
            }

          },
          {
            path: '/AdminPage/CollectStudent/:messagetype',
            name: 'CollectStudent',
            component: CollectStudent,
            meta: {
              keepAlive: false,
              title: '招生就业'
            }

          },
          {
            path: '/AdminPage/SlideShowadmin0',
            name: 'SlideShowadmin0',
            component: SlideShowadmin0,
            meta: {
              keepAlive: true
            }
          },

        ]
      },

      {
        path: '/SuperAdminPage',
        name: 'SuperAdminPage',
        component: SuperAdminPage,
      meta: {
          keepAlive: false,
          title: '超级管理员端'
        },
        children: [
          // {
          //   path: '',
          //   redirect: '/CollegeNews/:messagetype'
          // },
          {
            path: '/SuperAdminPage/Announcement/:messagetype',
            name: 'Announcement',
            component: Announcement,
            meta: {
              keepAlive: false,
              title: '通知公告'
            }
          },
          {
            path: '/SuperAdminPage/CollegeNews/:messagetype',
            name: 'CollegeNews',
            component: CollegeNews,
            meta: {
              keepAlive: false,
              title: '学院新闻'
            }

          },
          {
            path: '/SuperAdminPage/PresenceOfStudent/:messagetype',
            name: 'PresenceOfStudent',
            component: PresenceOfStudent,
            meta: {
              keepAlive: false,
              title: '学子风采'
            }
          },
          {
            path: '/SuperAdminPage/EditAssay/:id',
            name: 'EditAssay',
            component: EditAssay,
            meta: {
              keepAlive: false,
              title: '管理员端-编辑文章'
            }
          },
          {
            path: '/SuperAdminPage/AddAssay/:messagetype',
            name: 'AddAssay',
            component: AddAssay,
            meta: {
              keepAlive: false,
              title: '管理员端-添加文章'
            }

          },
          {
            path: '/SuperAdminPage/AducationOfTeaching/:messagetype',
            name: 'AducationOfTeaching',
            component: AducationOfTeaching,
            meta: {
              keepAlive: false,
              title: '教育教学'
            }

          },
          {
            path: '/SuperAdminPage/CollectStudent/:messagetype',
            name: 'CollectStudent',
            component: CollectStudent,
            meta: {
              keepAlive: false,
              title: '招生就业'
            }

          },
          {
            path: '/SuperAdminPage/SlideShowadmin0',
            name: 'SlideShowadmin0',
            component: SlideShowadmin0,
            meta: {
              keepAlive: true
            }
          },
          {
            path: '/SuperAdminPage/CheckList',
            name: 'CheckList',
            component: CheckList,
            meta: {
              keepAlive: true,
              title: '用户处理'
            }
          },
          {
            path: '/SuperAdminPage/AdminList',
            name: 'AdminList',
            component: AdminList,
            meta: {
              keepAlive: true,
              title: '取消管理员'
            }
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
          },
          {
            path:'/register',
            name:'Register',
            component: Register,
          }
        ],
        mode: 'history'
        // linkActiveClass: 'active'
      }
    ]
  }
)

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title,
    next()
})
export default router

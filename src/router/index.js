import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Permission from '../components/right/Permission.vue'
import Role from '../components/right/Role.vue'
import Category from '../components/courseManage/Category.vue'
import Course from '../components/courseManage/Course.vue'
import Department from '../components/courseManage/Department.vue'
import Teacher from '../components/user/Teacher.vue'
import Supervisor from '../components/user/Supervisor.vue'
import Student from '../components/user/Student.vue'
import EvaluationItem from '../components/evaluation/EvaluationItem.vue'
import Evaluation from '../components/evaluation/Evaluation.vue'
import TeacherHome from '../components/teacher/TeacherHome.vue'
import TeacherInfo from '../components/teacher/TeacherInfo.vue'
import TeacherEvaluation from '../components/teacher/TeacherEvaluation.vue'
import StudentHome from '../components/student/StudentHome.vue'
import StudentInfo from '../components/student/StudentInfo.vue'
import StudentEvaluation from '../components/student/StudentEvaluation.vue'
import SupervisorHome from '../components/supervisor/SupervisorHome.vue'
import SupervisorInfo from '../components/supervisor/SupervisorInfo.vue'
import SupervisorEvaluation from '../components/supervisor/SupervisorEvaluation.vue'
import SupervisorCourseManage from '../components/supervisor/SupervisorCourseManage.vue'
// import { component } from 'vue/types/umd'

Vue.use(Router)

const routes = [
  { path: '/' , redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', 
    component: Home, 
    redirect: '/welcome',
    children: [ 
      { path: '/welcome', component: Welcome }, 
      { path: '/user', component: Users },
      { path: '/teacher', component: Teacher },
      { path: '/supervisor', component: Supervisor },
      { path: '/student', component: Student },
      { path: '/permission', component: Permission },
      { path: '/role', component: Role },
      { path: '/category', component: Category},
      { path: '/course', component: Course},
      { path: '/department', component: Department},
      { path: '/evaluationItem', component: EvaluationItem},
      { path: '/evaluation', component: Evaluation}
    ] 
  },
  { path: '/teacher-home', 
    component: TeacherHome, 
    // redirect: '/welcome',
    children: [ 
      { path: '/teacher-info', component: TeacherInfo },
      { path: '/teacher-evaluation', component: TeacherEvaluation }
    ] 
  },
  { path: '/student-home', 
    component: StudentHome, 
    // redirect: '/welcome',
    children: [ 
      { path: '/student-info', component: StudentInfo },
      { path: '/student-evaluation', component: StudentEvaluation }
    ] 
  },
  { path: '/supervisor-home', 
    component: SupervisorHome, 
    // redirect: '/welcome',
    children: [ 
      { path: '/supervisor-info', component: SupervisorInfo },
      { path: '/supervisor-course-manage', component: SupervisorCourseManage },
      { path: '/supervisor-evaluation', component: SupervisorEvaluation }
    ] 
  }
]

const router = new Router({
  routes
})

/**
 * ????????????????????????
 * to??????????????????
 * from??????????????????
 * next??????????????????next()?????????????????????to??????,next('/direct')????????????????????????
 */
router.beforeEach((to, from, next) => {
  //?????????????????????????????????????????????????????????token???????????????????????????
  if (to.path === '/login') {
    return next()
  }
  const token = window.sessionStorage.getItem('token');
  //???token?????????????????????login????????????
  if (!token) {
    return next('/login')
  }
  //???token??????????????????????????????????????????
  next()

});

export default router

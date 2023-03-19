import { createRouter,createWebHistory } from 'vue-router'
import LoginPage from '../Pages/LoginPage.vue'
import AboutPage from '../Pages/AboutPage.vue'
import BeneficiarySignUpPage from '../Pages/BeneficiarySignUpPage.vue'
import ProfilePage from '../Pages/ProfilePage.vue'
import DonorSignUpPage from '../Pages/DonorSignUpPage.vue'
import ForgetPasswordPage from '../Pages/ForgetPasswordPage.vue'
import DonorHomePage from '../Pages/DonorHomePage.vue'
import BeneficiaryHomePage from '../Pages/BeneficiaryHomePage.vue'

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },

    {
        path: '/beneficiarysignup',
        name: 'BeneficiarySignUpPage',
        component: BeneficiarySignUpPage
    },
    {
        path: '/profile',
        name: 'ProfilePage',
        component: ProfilePage
    },
    {
        path: '/donorsignup',
        name: 'DonorSignUpPage',
        component: DonorSignUpPage
    },
    {
        path: '/forgetpassword',
        name: 'ForgetPasswordPage',
        component: ForgetPasswordPage
    },
    {
        path: '/donorhome',
        name: 'DonorHomePage',
        component: DonorHomePage
    },
    {
    path: '/beneficiaryhome',
    name: 'BeneficiaryHomePage',
    component: BeneficiaryHomePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
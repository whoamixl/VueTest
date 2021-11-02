import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Instruction from '@/components/Instruction'
import VueFliter from '@/components/VueFliter'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Instruction',
            component: Instruction
        },
        {
            path: '/VueFliter',
            name: 'VueFliter',
            component: VueFliter
        }
    ]
})
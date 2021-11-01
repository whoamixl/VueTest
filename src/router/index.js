import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Instruction from '@/components/Instruction'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Instruction',
        component: Instruction
    }]
})
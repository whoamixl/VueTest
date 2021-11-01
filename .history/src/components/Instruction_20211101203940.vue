<template>
    <div id='app'>
        <!-- v-on:click or @click 绑定事件监听器-->
        <button @click="changeValueMed">{{changeValue}}</button>
        <!-- v-bind or :  属性绑定-->
        <div :class="{active:isActive}"></div>
    </div>
</template>
<script>
export default {
    name:'Instruction',
    data(){
        return{
            changeValue:"clike me",
            isActive:true
        }
    },
    methods:{
        changeValueMed(){
            this.changeValue = 'v-on:click or @click'
            this.isActive = false
        }
    }
}
</script>
<style scoped>

</style>
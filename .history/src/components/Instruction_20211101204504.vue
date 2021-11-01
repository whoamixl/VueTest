<template>
    <div id='app'>
        <!-- v-on:click or @click 绑定事件监听器-->
        <button @click="changeValueMed">{{changeValue}}</button>
        <!-- v-bind or :  属性绑定-->
        <div :class="{active:isActive}"></div>
        <!-- v-model 在表单上创建双向数据绑定 -->
        <input v-model="v_model_data"><p>{{v_model_data}}</p>
    </div>
</template>
<script>
export default {
    name:'Instruction',
    data(){
        return{
            changeValue:"clike me",
            isActive:true,
            v_model_value:'v_model_data'
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
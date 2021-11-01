<template>
    <div id='app'>
        <!-- v-on:click or @click 绑定事件监听器-->
        <button @click="changeValueMed">{{changeValue}}</button>
        <br>
        <!-- v-bind or :  属性绑定-->
        <div :class="{active:isActive}"></div>
        <br>
        <!-- v-model 在表单上创建双向数据绑定 -->
        <input v-model="v_model_data"><p>{{v_model_data}}</p>
        <br>
        <!-- v-pre 原样输出 -->
        <div v-pre>{{v_model_data}}</div>
        <br>
        <!-- v-cloak 解决闪烁问题 -->
        <div v-cloak>{{msg}}</div>
        <br>
        <!-- v-once 只会渲染一次，优化更新性能 -->
        <div v-once>{{v_once}}</div>
    </div>
</template>
<script>
export default {
    name:'Instruction',
    data(){
        return{
            v_once:'v-once:只会渲染一次',
            msg:'This is a test data!',
            changeValue:"clike me",
            isActive:true,
            v_model_data:'v_model_value'
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
<template>
    <div id='app'>
        <div @click="changeValue"><u>{{changeValue}}</u></div>
    </div>
</template>
<script>
export default {
    name:'Instruction',
    data(){
        return{
            changeValue:"clike me"
        }
    },
    methods:{
        changeValue(){
            this.changeValue = 'v-on:click or @click'
        }
    }
}
</script>
<style scoped>

</style>
<template>
    <div id='app'>
        <div @click="changeValue"><u>click me</u></div>
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

        }
    }
}
</script>
<style scoped>

</style>
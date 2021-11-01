<template>
    <div id='app'>
        <div><u  @click="changeValueMed()">{{changeValue}}</u></div>
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
        changeValueMed(){
            this.changeValue = 'v-on:click or @click'
        }
    }
}
</script>
<style scoped>

</style>
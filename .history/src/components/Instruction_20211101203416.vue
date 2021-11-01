<template>
    <div id='app'>
        <!-- v-on:click or @click -->
        <button @click="changeValueMed>{{changeValue}}</button>
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
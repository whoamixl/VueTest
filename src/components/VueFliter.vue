<template>
    <div>
      <input type="text" v-model="message">
<!--      <div v-bind:data="'ok' | capitalize" ></div>-->
<!--      {{ message | capitalize('arg1', arg2) }}-->
<!--      上述代码中,message是作为参数传给 capitalize函数,capitalize 函数的返回值作为参数-->
      {{ message|capitalize}}
      <router-link to="/Watch">Vue计算属性和监听器学习</router-link>
    </div>
</template>
<script>
    export default {
        name: 'VueFliter',
        data() {
            return {
              message:''
            }
        },
        filters: {
            capitalize: function(value) {
                if (!value) return ""
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        methods:{

        }
    }
</script>
<style scoped>

</style>

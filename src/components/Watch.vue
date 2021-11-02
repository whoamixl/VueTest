<template>
<div id="app">
  <h2>计算属性</h2>
  <div class="calculateAttribute">
    <input type="text" v-model="message">
    <p>Original message:  {{message}}</p>
    <p>Calculate Attribute is computed:  {{reverseMessage}}</p>
  </div>
  <h2>侦听器Watch</h2>
  <div id="watch-example">
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
  </div>
</div>
</template>
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
export default {
  name: "Watch",
  data(){
    return{
      message:'calculateAttribute',
      question:'',
      answer:'I cannot give you an answer until you ask a question'
    }
  },
  computed:{
    //计算属性的getter
    reverseMessage:function (){
      return this.message.split('').reverse().join('')
    }
  },
  watch:{
    // 如果 `question` 发生改变，这个函数就会运行
    question:function (newQuestion, oldQuestion){
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer
    }
  },
  created() {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)

  },
  methods:{
    getAnswer(){
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  },

}
</script>

<style scoped>

</style>

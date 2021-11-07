<template>
<div class="app">
  <div class="topImage">
    <div class="baiduIcon"></div>
    <div>新型冠状病毒肺炎</div>
    <div>疫情实时大数据报告</div>
  </div>
  <div class="dataBody ">
    <div style="display: flex;justify-content: space-around">
      <div><a><span style="display: block;padding-bottom: 10px;border-bottom: 3px solid #10aeb5">疫情动态</span></a></div>
      <div><a><span style="display: block;padding-bottom: 10px;">本地播报</span></a></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CdYiQing",
  data(){
    return{
        dataStyle:true
    }
  }
}
</script>

<style scoped>
.app{
  background-color: #0d9faa;
  height: 100%;
}
.topImage{
  background-image:url("../assets/images/topImage.jpg");
  background-size: 100% 100%;
  position: relative;
  max-width:695px;
  min-height:189px;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  margin: 0 auto;
}
.dataBody{
  width: 60%;
  background-color: #fff;
  margin: 0 auto;
  max-width: 768px;
}
.dataTop{
  display: flex;
}
.dataTopItem{
  padding: 0 25%;
  border-bottom: #42b983;
  text-decoration: none;
}
</style>

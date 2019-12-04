<template>
  <section class="my-home">
      <el-row :gutter="20">
        <!--top-->
        <el-col :span="6"> <TopCardOne/> </el-col>
        <el-col :span="6"> <TopCardTwo/> </el-col>
        <el-col :span="6"><TopCardThree/></el-col>
        <el-col :span="6"><TopCardFour/></el-col>

        <!--middle-->
        <el-col :span="24" style="margin-top:22px;"><HomeTab/></el-col>

        <!--bottom-->
        <el-col :span="12" style="margin-top:22px;"><BottomLeft/></el-col>
        <el-col :span="12" style="margin-top:22px;"><BottomRight/></el-col>
      </el-row>
  </section>
</template>
<script>
import { TopCardOne,TopCardTwo,TopCardThree,TopCardFour,HomeTab,BottomLeft,BottomRight } from '~/components/homeComponent'
export default {
  layout:'homeLayout',
  components:{
    TopCardOne,
    TopCardTwo,
    TopCardThree,
    TopCardFour,
    HomeTab,
    BottomLeft,
    BottomRight
  }
}
</script>
<style lang="less">
.my-home{
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: .3s;
  background-color: #f0f2f5;
  padding: 24px;
  display: block;
  -webkit-box-flex: 1;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
}
</style>

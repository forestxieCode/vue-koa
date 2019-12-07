<template>
    <section class="personalCenter">
        <el-row :gutter="20">
            <el-col :span="8">
                <my-selef-info-card/>
            </el-col>

            <el-col :span="16">
                <my-project-contect />
            </el-col>
        </el-row>
    </section>
</template>
<script>
import { MySelefInfoCard,MyProjectContect } from '~/components/personalpageComponent'
export default {
    layout:'homeLayout',
    components:{
        MySelefInfoCard,
        MyProjectContect
    }
}
</script>
<style lang="less">
.personalCenter{
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: .3s;
  background-color: #f0f2f5;
  display: block;
  -webkit-box-flex: 1;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  padding: 25px;
}
</style>
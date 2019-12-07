<template>
    <el-card class="my-selef-info-card" shadow="never">
     <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="我的项目" name="first">
            <my-project-card />
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    </el-tabs>
    </el-card>
</template>
<script>
import MyProjectCard from './MyProjectCard'
export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    components:{
        MyProjectCard
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style lang="less">
.my-project-contect{

}
</style>
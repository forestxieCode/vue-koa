<template>
  <section class="workplace">
    <el-row class="workplace-contect" :gutter="20">
      <el-col :span="16">
        <ProjectLoding></ProjectLoding>
        <Dynamic style="margin-top:20px;"></Dynamic>
      </el-col>
      <el-col :span="8">
        <ShortcutBar></ShortcutBar>
        <PersonalIndex style="margin-top:20px;" :isCollapse="isCollapse"></PersonalIndex>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import ProjectLoding from '~/components/workplaceComponent/ProjectLoding'
import ShortcutBar from '~/components/workplaceComponent/ShortcutBar'
import Dynamic from '~/components/workplaceComponent/Dynamic'
import PersonalIndex from '~/components/workplaceComponent/PersonalIndex'
export default {
  layout:'homeLayout',
  props:['isCollapse'],
  components:{
    ProjectLoding,
    ShortcutBar,
    Dynamic,
    PersonalIndex
  },
  mounted(){
    console.log(this.isCollapse)
  }
}
</script>
<style lang="less">
.workplace{
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
  .workplace-contect{

  }
}
</style>

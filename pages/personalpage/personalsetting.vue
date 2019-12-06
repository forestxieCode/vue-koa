<template>
  <section class="personalsetting">
      <div class="personalsetting-warrp"  >
          <el-tabs :tab-position="tabPosition" :style="`height:100%;`">
            <el-tab-pane label="基本设置">
              <basic-setup style="margin-left:20px;" />
            </el-tab-pane>
            <el-tab-pane label="安全设置">
              <security-setting style="margin-left:20px;" />
            </el-tab-pane>
            <el-tab-pane label="个人留言">
               <personal-dynamics style="margin-left:20px;"/>
            </el-tab-pane>
        </el-tabs>
      </div>
  </section>
</template>
<script>
import { BasicSetup ,SecuritySetting ,PersonalDynamics} from '~/components/personalpageComponent'
export default {
  layout:'homeLayout',
   data() {
      return {
        tabPosition: 'left'
      }
    },
    components:{
        BasicSetup,
        SecuritySetting,
        PersonalDynamics
    }
}
</script>
<style lang="less">
.personalsetting{
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
.personalsetting-warrp{
    flex: 1;
    height: 100%;
    width: 100%;
    padding: 15px;
    border-radius: 3px;
    background-color: #fff;
    .el-tabs__item{
      padding: 0 36px;
    }
}
</style>

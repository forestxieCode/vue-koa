<template>
  <section class="personalsetting">
      <div class="personalsetting-warrp" ref="personalsettingWarrp" >
          <el-tabs :tab-position="tabPosition" v-model="activeName" :style="`height:100%;`">
            <el-tab-pane label="基本设置" name="0">
              <basic-setup style="margin-left:20px;" ref="personalsettingWarrp0"/>
            </el-tab-pane>
            <el-tab-pane label="安全设置" name="1">
              <security-setting style="margin-left:20px;" ref="personalsettingWarrp1"/>
            </el-tab-pane>
            <el-tab-pane label="个人动态" name="2" ref="personalsettingWarrp2">
                个人动态
            </el-tab-pane>
        </el-tabs>
      </div>
  </section>
</template>
<script>
import { BasicSetup ,SecuritySetting} from '~/components/personalpageComponent'
export default {
  layout:'homeLayout',
   data() {
      return {
        tabPosition: 'left',
        tHeight:'',
        activeName: '0',
      }
    },
    components:{
        BasicSetup,
        SecuritySetting
    },
    watch:{
      activeName:function(newVal,oldVal){
        this.$nextTick(()=>{
           console.log(this.$refs['personalsettingWarrp'+this.activeName].clientHeight)
         })
      }
    },
    mounted(){
        this.$nextTick(()=>{
           console.log(this.$refs.personalsettingWarrp.clientHeight)
        })
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
    width: 100%;
    padding: 15px;
    border-radius: 3px;
    background-color: #fff;
    .el-tabs__item{
      padding: 0 36px;
    }
}
</style>

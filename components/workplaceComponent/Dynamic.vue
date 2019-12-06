<template>
  <el-card class="dynamic" shadow="never">
    <div slot="header" class="clearfix">
      <span>最新留言</span>
    </div>
    <div v-for="(item,index) in dynamicArr" :key="index" class="dynamic-item">
      <div class="info">
        <img :src="item.authorImg"/>
        <div>
          <span>{{item.message}}</span>
          <span>{{item.update_time}}</span>
        </div>
      </div>
      <el-divider></el-divider>
    </div>
  </el-card>
</template>
<script>
const dynamicArr = [
    {
      url:'http://img.mp.sohu.com/q_mini,c_zoom,w_640/upload/20170803/a44baf420efe4b399dc1e4e8b4f89055_th.jpg',
      contect:'加油加油，快起来修复bug啦',
      updateTime:'2小时'
    },
    {
      url:'https://img2.woyaogexing.com/2019/11/21/0e28658d712b46bfa704150bd9397060!400x400.jpeg',
      contect:'坚持就是胜利，爱拼才会赢',
      updateTime:'2小时'
    },
    {
      url:'https://img2.woyaogexing.com/2019/11/21/f1a3b1848af44f3289c5e6d356eb34aa!400x400.jpeg',
      contect:'我应该会成为大神的。加油',
      updateTime:'2小时'
    },
    {
      url:'https://img2.woyaogexing.com/2019/11/21/7092d8ef465f4bf5892d49d65d181704!400x400.jpeg',
      contect:'今天还得努力啊，感觉自己好菜啊',
      updateTime:'2小时'
    }
  ]
  const sortKey = (array, key) =>{
        return array.sort(function(a, b) {
          var x = a[key];
          var y = b[key];
          return x > y ? -1 : x < y ? 1 : 0;
        });
  }
  import { getMessageList } from '~/api/users'
  export default {
    data(){
      return {
        dynamicArr
      }
    },
    methods:{
      async getMessageList(){
        let data =  await getMessageList()
        sortKey(data.data, "update_time");
        data.data = data.data.splice(0,4)
        this.dynamicArr = data.data
      }
    },
    mounted(){
      this.getMessageList()
    }
  }
</script>
<style lang="less">
.dynamic{
  .clearfix{
    span{
      font-size: 16px;
    }
  }
  .dynamic-item{
    .info{
      display: flex;
      img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        vertical-align: top;
      }
      div{
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        & span:last-child{
          margin-top: 5px;
          font-size: 14px;
          color: rgba(0,0,0,.25);
        }
      }
    }
  }

}
</style>

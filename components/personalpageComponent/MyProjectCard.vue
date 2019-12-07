<template>
    <section class="my-project-card" shadow="never">
    
     <el-row :gutter="20">
         <el-col :span="8">
         <el-card :body-style="{ padding: '0px' }" >
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span>VUE</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
                </el-card>
         </el-col>
          <el-col :span="8">
              <el-card :body-style="{ padding: '0px' }" >
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span>React</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
                </el-card>
         </el-col>
          <el-col :span="8">
              <el-card :body-style="{ padding: '0px' }" >
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span>Taro</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
                </el-card>
         </el-col>
     </el-row>

    <el-row :gutter="20" style="margin-top:20px;">
         <el-col :span="8">
              <el-card :body-style="{ padding: '0px' }" >
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span>Nuxt</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
                </el-card>
         </el-col>
          <el-col :span="8">
              <el-card :body-style="{ padding: '0px' }" >
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span>Koa</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
                </el-card>
         </el-col>
          <el-col :span="8">
              <el-card :body-style="{ padding: '0px' }" >
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
                </el-card>
         </el-col>
     </el-row>
    
    
    </section> 

</template>
<script>
export default {
    data(){
        return {
            projectList :[
                {
                    url:'https://forestxiecode.github.io/forestxieCoded.github.io'
                }
            ],
            currentDate: new Date()
        }
    }
}
</script>
<style lang="less">
.my-project-card{
    // padding: 24px;
    zoom: 1;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    .time {
        font-size: 13px;
        color: #999;
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }
    .el-col:nth-child(4n){
        margin-top: 20px;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
}

</style>
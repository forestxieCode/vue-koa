<template>
    <section class="basic-setup">
        <div class="title">基本设置</div>
        <el-row>
            <el-col :span="16">
                <el-form :label-position="'top'" label-width="80px" :model="formData" style="margin-top:20px;">
                    <el-form-item label="昵称">
                        <el-input v-model="formData.nice" placeholder="可以设置昵称噢"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-input v-model="formData.phone" placeholder="有意请留下电话联系"></el-input>
                    </el-form-item>
                    <el-form-item label="简介">
                        <el-input type="textarea" v-model="formData.desc" :rows="5" placeholder="请留下你最美的芳言"></el-input>
                    </el-form-item>
                     <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" size="small">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="8" style="padding-left:10%;">
                <up-load></up-load>
            </el-col>
        </el-row>
    </section>
</template>
<script>

import  UpLoad  from '~/components/public/UpLoad'
export default {
    data(){
        return{
          formData:{
              nice:'',
              desc:'',
              phone:'',
              authorImg:''
          }
        }
    },
    components:{
        UpLoad
    },
    methods:{
        submitForm(){
            
        }
    }
}
</script>
<style lang="less">
.basic-setup{
    margin-top: 5px;
    .title{
        color: rgba(0,0,0,.85);
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
    }
}
</style>
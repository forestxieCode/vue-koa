<template>
    <el-card class="my-selef-info-card" shadow="never">
        <div class="account-center-avatarHolder">
            <div class="avatar">
                <img :src="userinfo.authorImg?`${$config.fileApi}${userinfo.authorImg}`:`${$config.fileApi}/uploads/default_aveter.jpg`" alt="">
            </div>
            <div class="username">{{userinfo.username}} / {{userinfo.nice ? userinfo.nice :'暂无,快去设置吧'}} </div>
            <div class="desc">{{userinfo.desc}}</div>
        </div>
        <div class="account-center-detail">
            <p><i class="el-icon-suitcase"/>{{userinfo.job ? userinfo.job :'暂无,快去设置吧'}}</p>
            <p><i class="el-icon-coordinate" />{{userinfo.jobDescription ? userinfo.jobDescription :'暂无,快去设置吧'}}</p>
            <p><i class="el-icon-location-outline"/>{{userinfo.address ? userinfo.address :'暂无,快去设置吧'}}</p>
        </div>
        <el-divider></el-divider>
        
        <div class="myTag">
            <div class="title">标签</div>
            <el-tag
                :key="tag"
                v-for="tag in userinfo.tags"
                type="info"
                :size="mini"
                :disable-transitions="false"
                >
                {{tag}}
            </el-tag>
        </div>

        <el-divider></el-divider>

        <div class="myteam">
            <div class="title">团队</div>
            <div class="tem-list">
                <span v-for="item in userinfo.team" :key="item.teamName"><img :src="item.teamImg?`${$config.fileApi}${item.teamImg}`:`${$config.fileApi}/uploads/default_aveter.jpg`" >{{item.teamName}}</span>
            </div>
        </div>
    </el-card>
</template>
<script>
import { mapGetters,mapMutations  } from 'vuex'
export default {
    data(){
        return {
            dynamicTags: ['帅气', '宅男控', '小前端','技术控'],
        }
    },
    computed:{
     ...mapGetters([
      'userinfo'
     ])
    },
    methods:{

    }
}
</script>
<style lang="less">
.my-selef-info-card{
    padding: 24px;
    zoom: 1;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    .account-center-avatarHolder{
        height: 177px;
        width: 100%;
        .avatar{
            height: 140px;
            width: 100%;
            display: flex;
            justify-content: center;
            img{
                width: 104px;
                height: 104px;
                border-radius: 50%;
            }
        }
        .username{
            color: rgba(0,0,0,.85);
            font-size: 20px;
            line-height: 28px;
            font-weight: 500;
            margin-bottom: 4px;
            text-align: center
        }
        .desc{
           color: rgba(0,0,0,.65);
            font-size: 14px;
            text-align: center;
            font-variant: tabular-nums;
            line-height: 1.5;
            list-style: none; 
        }

    }
    .el-card__body{
        padding: 0;
    }

    .account-center-detail{
        margin-top: 40px;
        p{
            i{
                margin-bottom: 8px;
                padding-right: 26px;
                position: relative;
            }
        }
    }
    .myTag{
        .title{
            font-weight: 500;
            color: rgba(0,0,0,.85);
            margin-bottom: 12px;
        }
        .el-tag + .el-tag {
            margin-left: 10px;
        }
        .button-new-tag {
            margin-left: 10px;
            height: 32px;
            line-height: 30px;
            padding-top: 0;
            padding-bottom: 0;
        }
        .input-new-tag {
            width: 90px;
            margin-left: 10px;
            vertical-align: bottom;
        }
    }
    .myteam{
        .title{
            font-weight: 500;
            color: rgba(0,0,0,.85);
            margin-bottom: 12px;
        } 
        .tem-list{
            display: flex;
            flex-wrap: wrap;
            

            img{
                width: 24px;
                height: 24px;
                border-radius: 50%;
                margin-right: 10px;
                vertical-align: middle;
            }
            span{
                margin-bottom: 10px;
                width: 33.3%;
                padding: 5 10px;
            }
        }
    }
}
</style>
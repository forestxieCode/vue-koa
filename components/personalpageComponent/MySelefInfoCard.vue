<template>
    <el-card class="my-selef-info-card" shadow="never">
        <div class="account-center-avatarHolder">
            <div class="avatar">
                <img :src="userinfo.authorImg?`${$config.fileApi}${userinfo.authorImg}`:`${$config.fileApi}/uploads/default_aveter.jpg`" alt="">
            </div>
            <div class="username">{{userinfo.username}} / {{userinfo.nice ? userinfo.nice :'暂无'}} </div>
            <div class="desc">{{userinfo.desc}}</div>
        </div>
        <div class="account-center-detail">
            <p><i class="el-icon-suitcase"/>前端工程师</p>
            <p><i class="el-icon-coordinate" /> xx公司 - 技术部 - 小小前端</p>
            <p><i class="el-icon-location-outline"/>湖南省长沙市</p>
        </div>
        <el-divider></el-divider>
        
        <div class="myTag">
            <div class="title">标签</div>
            <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                type="info"
                :size="mini"
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
            </el-tag>
            <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
                >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">新增</el-button>
        </div>

        <el-divider></el-divider>

        <div class="myteam">
            <div class="title">团队</div>
            <div class="tem-list">
                <span><img src="../../assets/img/avtor.jpg" > 游戏团</span>
                <span><img src="../../assets/img/avtor.jpg" >日常发呆</span>
                <span><img src="../../assets/img/avtor.jpg" > 代码搬运工</span>
                <span><img src="../../assets/img/avtor.jpg" >技术团</span>
                <span><img src="../../assets/img/avtor.jpg" >阅读团</span>
                <span><img src="../../assets/img/avtor.jpg" >自由职业</span>
                <span><img src="../../assets/img/avtor.jpg" >看剧团</span>
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
            inputVisible: false,
            inputValue: ''
        }
    },
    computed:{
     ...mapGetters([
      'userinfo'
     ])
    },
    methods:{
     handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
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
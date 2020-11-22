<template>
    <div>
        <h3>HoneContainer</h3>
        <!--轮播图区域-->
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

    </div>
</template>

<script>
import { Toast } from 'mint-ui'



export default {
    data(){
        return{};
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu: function () {
            // 获取轮播图数据的方法
            this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
                // console.log(result.body);
                if(result.body.status ===0){
                    this.lunbotuList = result.body.message;
                }else{
                    Toast('加载失败')
                }
            });

        }

    }
}
</script>

<style lang="scss" scoped>

.mint-swipe{
    height: 200px;

    /*交集选择器*/
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
          }
      }
    .mint-swipe-item{
        &:nth-child(2){
            background-color: blue;
        }
    }
    .mint-swipe-item{
        &:nth-child(3){
            background-color: cyan;
        }
    }

}
</style>